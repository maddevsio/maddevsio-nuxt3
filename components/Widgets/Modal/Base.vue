<script setup lang="ts">
import { manageScrollOnBody } from '~/utils/manageScrollOnBody'
import 'simplebar-vue/dist/simplebar.min.css';

const Simplebar = defineAsyncComponent(() => import('simplebar-vue'))

const props = defineProps({
  whereIsCalled: {
    type: String,
    default: '',
  },

  ebookSendpulseTemplateId: {
    type: Number,
    default: 763889, // default value is a template ID of  "Ebooks - Pricing Strategies"
  },

  withScroll: {
    type: Boolean,
    default: true,
  },
})

const { styles } = useStyleFormElement()
const route = useRoute()
const { $eventBus } = useNuxtApp()
const isShowModal = ref(false)

const keyboardHandler = (event: KeyboardEvent) => {
  if (event.key === 'Esc' || event.key === 'Escape') {
    close()
  }
}
const show = () => {
  isShowModal.value = true
  manageScrollOnBody.disableScrollOnBody()
  document.addEventListener('keyup', keyboardHandler)
}

const close = () => {
  isShowModal.value = false
  manageScrollOnBody.enableScrollOnBody()
  if (props.whereIsCalled === 'ebook' && props.ebookSendpulseTemplateId) {
    ManageCookie.setCookie({
      name: `sawModal_${ props.ebookSendpulseTemplateId }`,
      value: true,
      expires: 30,
    })
  }
}
const closeEventListener = () => {
  $eventBus.$on('modal-close', (cb: any) => {
    close()
    cb()
    $eventBus.$off('modal-close')
  })
}

closeEventListener()

onUnmounted(() => {
  closeEventListener()
  document.removeEventListener('keyup', keyboardHandler)
})

watch(route, newRoute => {
  if (newRoute.path === '/success-and-faq/') { close() }
})

defineExpose({
  show,
  close,
  isShowModal,
})
</script>
<template>
  <LazySharedUITransitionFade>
    <div
      v-if="isShowModal"
      :class="styles['modal-window']"
    >
      <div
        :class="styles['modal-window__overlay']"
        @click="close"
      />
      <div
        v-if="withScroll"
        :class="styles['modal-window__body-wrapper']"
      >
        <Simplebar
          id="modal-window-body"
          :class="styles['modal-window__body']"
        >
          <slot name="title" />
          <slot />
          <button
            aria-label="Close modal"
            type="button"
            :class="styles['modal-window__close']"
            @click="close"
          />
        </Simplebar>
      </div>
      <div v-else :class="[styles['modal-window__body-wrapper'], styles['modal-window__body-wrapper--without-scroll']]">
        <slot name="title" />
        <slot />
        <button
          aria-label="Close modal"
          type="button"
          :class="styles['modal-window__close']"
          @click="close"
        />
      </div>
    </div>
  </LazySharedUITransitionFade>
</template>
<style module lang="scss">
@import './styles/modalWindow.module';
</style>

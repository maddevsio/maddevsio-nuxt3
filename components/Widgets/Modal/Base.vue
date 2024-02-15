<script setup lang="ts">
// import Simplebar from 'simplebar-vue';
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
})

const { styles } = useStyleFormElement()
const route = useRoute()
const $eventBus = useEventBus()
const isShowModal = ref(false)
const show = () => {
  isShowModal.value = true
  manageScrollOnBody.disableScrollOnBody()
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
  $eventBus.$on('modal-close', () => {
    close()
    $eventBus.$off('modal-close')
  })
}

closeEventListener()

onUpdated(() => {
  closeEventListener()
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
  <Transition
    name="fade"
    appear
    :enter-active-class="styles['fade-enter-active']"
    :leave-active-class="styles['fade-leave-active']"
    :enter-class="styles['fade-enter']"
    :leave-to-class="styles['fade-leave-to']"
    :enter-to-class="styles['fade-enter-to']"
    :leave-class="styles['fade-leave']"
  >
    <div
      v-if="isShowModal"
      :class="styles['modal-window']"
    >
      <div
        :class="styles['modal-window__overlay']"
        @click="close"
      />
      <div
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
    </div>
  </Transition>
</template>
<style module lang="scss">
@import './styles/modalWindow.module';
</style>

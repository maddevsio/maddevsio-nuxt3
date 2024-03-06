<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

defineProps({
  location: {
    type: String,
    required: true,
  },

  formUid: {
    type: [String, Number],
    default: 'modal',
  },

  emailSubject: {
    type: String,
    default: '',
  },

  checklistName: {
    type: String,
    default: '',
  },

  checklistPathOnS3: {
    type: String,
    default: '',
  },

  sendpulseTemplateID: {
    type: [String, Number],
    default: '',
  },

  image: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },
})

const {
  show,
  styles,
  modalWindow,
} = useModalData()
const { $eventBus } = useNuxtApp()
const handleSuccessSend = (isSuccess: any) => {
  if (!isSuccess || !modalWindow.value?.$el) { return }
  modalWindow.value.$el.querySelector('#modal-window-body').style.height = '400px'
}

$eventBus.$on('success-send', handleSuccessSend)

onUnmounted(() => {
  $eventBus.$off('success-send')
})

defineExpose({
  show,
})
</script>
<template>
  <LazyWidgetsModalBase
    ref="modalWindow"
    :class="styles['checklist-modal']"
  >
    <template #title>
      <span
        :class="styles['checklist-modal__title']"
      >
        Get your copy of checklist now
      </span>
    </template>
    <div
      :class="styles['checklist-modal__content']"
    >
      <LazyWidgetsFormChecklist
        :form-location="location"
        :form-uid="formUid"
        :email-subject="emailSubject"
        :checklist-name="checklistName"
        :checklist-path-on-s3="checklistPathOnS3"
        :sendpulse-template-i-d="sendpulseTemplateID"
        :is-modal-checklist="true"
      />
      <img
        v-if="image.url"
        :src="image.url"
        :alt="image.alt"
        :width="image.dimensions.width"
        :height="image.dimensions.height"
        :class="styles['checklist-modal__image']"
      >
    </div>
  </LazyWidgetsModalBase>
</template>
<style module lang="scss">
@import "./styles/checklistModal.module";
</style>

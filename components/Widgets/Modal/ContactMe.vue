<script setup lang="ts">
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
})

const {
  show,
  styles,
  modalWindow,
} = useModalData()

defineExpose({
  show,
})
</script>
<template>
  <LazyWidgetsModalBase
    ref="modalWindow"
    :class="styles['contact-me-modal']"
  >
    <LazyWidgetsFormContactMe
      :form-location="location"
      :form-uid="formUid"
      :email-subject="emailSubject"
    />
  </LazyWidgetsModalBase>
</template>
<style module lang="scss">
@import "./styles/contactMeModal.module";
</style>

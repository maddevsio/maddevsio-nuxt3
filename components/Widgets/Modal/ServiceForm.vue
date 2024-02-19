<script setup lang="ts">
defineProps({
  slice: {
    type: Object,
    required: true,
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
    :class="styles['service-form-modal']"
  >
    <LazyWidgetsFormService
      :slice="slice"
      form-uid="modal-service-form"
    />
  </LazyWidgetsModalBase>
</template>
<style module lang="scss">
@import "./styles/serviceFormModal.module";
</style>

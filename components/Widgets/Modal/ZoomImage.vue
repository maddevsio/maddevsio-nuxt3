<script setup lang="ts">
const {
  show,
  styles,
  modalWindow,
} = useModalData()

defineExpose({
  show,
  close,
})
</script>

<template>
  <LazyWidgetsModalBase
    ref="modalWindow"
    :class="styles['zoom-image-modal']"
    :with-scroll="false"
  >
    <slot />
  </LazyWidgetsModalBase>
</template>

<style module lang="scss">
@import './styles/zoomImage.module';
</style>

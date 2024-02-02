<script setup lang="ts">
const { logo } = defineProps({
  logo: {
    type: Object,
    default: () => ({
      width: 0,
      height: 0,
      folder: '',
      file: '',
      alt: '',
    }),
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case-studies-item-logo-wrapper">
    <img
      loading="lazy"
      :width="logo.width"
      :height="logo.height"
      :src="
        $getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)
      "
      :alt="logo.alt || 'Image'"
      class="case-studies-item-logo"
    >
  </div>
</template>
<style lang="scss" scoped>
.case-studies-item {
  &-logo {
    max-width: 70px;
    height: auto;

    &-wrapper {
      position: relative;
      z-index: 2;
      display: block;
    }

    @media screen and (min-width: 768px) {
      max-width: 105px;
    }
  }
}
</style>

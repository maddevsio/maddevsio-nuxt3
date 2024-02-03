<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  alt: {
    type: String,
    default: 'Image',
  },
  lazy: {
    type: Boolean,
    default: true,
  },
})

const { isMobile } = useDevice()
</script>

<template>
  <NuxtImg
    provider="prismic"
    preload
    :src="src"
    sizes="mobile:380px tablet:512px desktop:100vw"
    :alt="alt"
    :width="isMobile ? 413 : width"
    :height="isMobile ? 580 : height"
    class="picture-image"
  />
</template>
<style scoped lang="scss">
.picture-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

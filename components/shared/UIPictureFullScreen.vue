<script setup lang="ts">
const props = defineProps({
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
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: `${ props.src.split('?')[0] }?auto=compress,format&w=650`,
    },
  ],
})
</script>

<template>
  <picture>
    <source
      :srcset="`${src.split('?')[0]}?auto=compress,format&w=650`"
      media="(max-width: 450px)"
    >
    <img
      :loading="lazy ? 'lazy' : 'eager'"
      :src="src.replace('compress,', '')"
      :width="isMobile ? 413 : width"
      :height="isMobile ? 580 : height"
      :alt="alt"
      class="picture-image"
    >
  </picture>
</template>
<style scoped lang="scss">
.picture-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

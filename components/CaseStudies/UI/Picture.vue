<script setup lang="ts">
const props = defineProps({
  folder: {
    type: String,
    default: '',
  },

  file: {
    type: String,
    default: '',
  },

  extension: {
    type: String,
    default: '',
  },

  alt: {
    type: String,
    default: '',
  },

  lazy: {
    type: Boolean,
    default: true,
  },

  shadow: {
    type: Boolean,
    default: false,
  },

  radius: {
    type: Boolean,
    default: false,
  },

  width: {
    type: Number,
    default: 0,
  },

  height: {
    type: Number,
    default: 0,
  },

  background: {
    type: Boolean,
    default: false,
  },
})

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <picture>
    <source
      :class="{ 'box-shadow': shadow, 'border-radius': radius, 'grey-background': background }"
      :srcset="[
        $getMediaFromS3(`/images/Cases/${folder}/webp/${file}.webp`),
        $getMediaFromS3(`/images/Cases/${folder}/webp/${file}@2x.webp 2x`)].join(', ')
      "
      class="image"
      type="image/webp"
    >
    <img
      loading="lazy"
      :class="{ 'box-shadow': shadow, 'border-radius': radius, 'grey-background': background }"
      :src="$getMediaFromS3(`/images/Cases/${folder}/${extension}/${file}.${extension}`)"
      :alt="alt || 'Image'"
      :width="width"
      :height="height"
      class="image picture-component"
    >
  </picture>
</template>
<style lang="scss" scoped>
.image {
  width: 100%;
  height: auto;
  display: block;
}

.grey-background {
  background-color: $bgcolor--silver;
}

.box-shadow {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05), 0px 5.47001px 41.35px rgba(0, 0, 0, 0.1);
}

.border-radius {
  border-radius: 3px;
}
</style>

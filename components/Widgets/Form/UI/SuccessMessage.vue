<script setup lang="ts">
const props = defineProps({
  successMessage: {
    type: Object,
    required: true,
  },
})

const {
  show,
  title,
  description,
  showImage,
  imagePath,
  imageAlt,
} = props.successMessage
const { $getMediaFromS3 } = useMediaFromS3()
const { styles } = useStyleFormElement()
</script>
<template>
  <div
    :class="styles['form-success-message']"
  >
    <img
      v-if="showImage && imagePath"
      loading="lazy"
      :src="$getMediaFromS3(imagePath)"
      :alt="imageAlt || 'Image'"
      :class="styles['form-success-message__image']"
      width="64"
      height="64"
    >
    <h5
      v-if="title"
      :class="styles['form-success-message__title']"
    >
      {{ title }}
    </h5>
    <p
      v-if="description"
      :class="styles['form-success-message__description']"
      v-html="description"
    />
  </div>
</template>
<style lang="scss" module>
@import "./styles/formSuccessMessage.module";
</style>

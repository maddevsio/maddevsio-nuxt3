<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

defineProps({
  image: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  colorTheme: {
    type: String,
    default: 'white',
  },
})
</script>
<template>
  <div
    :class="`awards-little-card awards-little-card--${colorTheme}`"
    :title="image.alt && image.alt"
  >
    <img
      v-if="image.url"
      loading="lazy"
      :src="image.url"
      :alt="image.alt || 'award'"
      width="125"
      height="104"
      :title="image.alt && image.alt"
      class="awards-little-card__image"
    >
  </div>
</template>
<style scoped lang="scss">
.awards-little-card {
  border-radius: 9px;
  box-sizing: border-box;
  padding: 23px 32.5px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &--white {
    background-color: $bgcolor--cultured;
  }

  &--black {
    background-color: $bgcolor--black-pale;
  }

  &__image {
    width: 100%;
    height: 100%;
    max-width: 125px;
    max-height: 104px;
    display: block;
    object-fit: contain;
  }

  @media screen and (max-width: 1200px), screen and (max-width: 1420px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 12px 17px;
  }

  @media screen and (max-width: 820px) {
    min-height: 112px;
    max-height: 112px;
  }
}
</style>

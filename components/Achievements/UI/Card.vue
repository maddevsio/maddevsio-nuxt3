<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  image: ImageField
  width: number
  height: number
  description: string
}
defineProps<Props>()
</script>
<template>
  <div
    class="achievement"
    data-testid="achieve-block"
  >
    <NuxtImg
      provider="prismic"
      loading="lazy"
      class="achievement__image"
      :width="width"
      :height="height"
      :src="image.url"
      :alt="image.alt || 'Achievement'"
    />
    <h3 class="achievement__description">
      {{ description }}
    </h3>
  </div>
</template>
<style lang="scss" scoped>
.achievement {
  background-color: $bgcolor--cultured;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  padding: 27px 40px;
  max-width: 590px;

  &__image {
    margin-right: 55px;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: $text-color--black-oil;
  }

  @media screen and (max-width: 1125px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    flex-shrink: 1;

    &__image {
      margin-right: 0;
      margin-bottom: 12px;
      max-height: 60px;
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: left;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 14px 12px;

    &__description {
      font-size: 10px;
      letter-spacing: -0.4px;
    }
  }
}
</style>

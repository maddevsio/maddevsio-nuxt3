<script setup lang="ts">
import type { PropType } from 'vue'

interface TextCard {
  title: string
  subtitle: string
  descriptions: string[]
}

defineProps({
  textCardData: {
    type: Object as PropType<TextCard>,
    default: () => ({}),
  },
})
</script>
<template>
  <div
    class="our-principles__text-content-item"
  >
    <h3 class="our-principles__text-content-title">
      {{ textCardData.title }}
    </h3>
    <p
      class="our-principles__text-content-subtitle"
    >
      {{ textCardData.subtitle }}
    </p>
    <p
      v-for="(description, i) in textCardData.descriptions"
      :key="`${description}-${i}`"
      class="our-principles__text-content-description"
    >
      {{ description }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.our-principles__text-content {
  &-item {
    margin-bottom: 105px;

    &:nth-child(3) {
      margin-bottom: 77px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-title {
    @include font('Poppins', 40px, 700);
    line-height: 130%;
    color: $text-color--chinese-black;
    margin-bottom: 20px;
  }

  &-subtitle {
    @include font('Inter', 24px, 600);
    line-height: 130%;
    color: $text-color--chinese-black;
    margin-bottom: 15px;
  }

  &-description {
    @include font('Inter', 16px, 400);
    line-height: 26px;
    color: $text-color--chinese-black;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1100px) {
    &-item {
      margin-bottom: 70px;

      &:nth-child(3) {
        margin-bottom: 70px;
      }
    }
  }

  @media screen and (max-width: 978px) {
    &-item {
      flex: 1 1 46%;
      margin-bottom: 0;

      &:nth-child(3) {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &-item {
      flex-basis: 100%;
    }

    &-title {
      font-size: 28px;
      line-height: 130%;
      margin-bottom: 12px;
    }

    &-subtitle {
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
      margin-bottom: 15px;
    }

    &-description {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.4px;
    }
  }
}
</style>

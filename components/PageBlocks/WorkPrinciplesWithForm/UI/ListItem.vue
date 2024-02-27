<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

defineProps({
  icon: {
    type: Object as PropType<ImageField>,
    required: true,
    default: () => ({}),
  },

  description: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <div class="work-principles-item">
    <img
      v-if="icon.url"
      loading="lazy"
      :src="icon.url"
      :alt="icon.alt || 'Icon'"
      :width="icon.dimensions.width"
      :height="icon.dimensions.height"
      class="work-principles-item__icon"
    >
    <p class="work-principles-item__description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.work-principles-item {
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid $bgcolor--grey-hover;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  &__icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 35px;
  }

  &__description {
    @include font('Inter', 20px, 600);
    line-height: 150%;
    letter-spacing: -1px;
    color: inherit;
  }

  @media screen and (max-width: 1190px) {
    &__description {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 650px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 360px) {
    &__description {
      font-size: 16px;
    }
  }
}
</style>

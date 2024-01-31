<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

defineProps({
  image: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  description: {
    type: String,
    default: '',
  },

  colorTheme: {
    type: String,
    default: 'white',
  },
})
</script>
<template>
  <div
    :class="`awards-big-card awards-big-card--${colorTheme}`"
  >
    <img
      v-if="image.url"
      loading="lazy"
      :src="image.url"
      :alt="image.alt || 'award'"
      width="180"
      height="146.12"
      class="awards-big-card__image"
    >
    <p
      v-if="description"
      :class="`awards-big-card__description awards-big-card__description--${colorTheme}`"
      v-html="description.replace(/\n/g, '<br />')"
    />
  </div>
</template>
<style scoped lang="scss">
.awards-big-card {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 9px;
  padding: 32px 27px;
  box-sizing: border-box;

  &--white {
    background-color: $bgcolor--cultured;
  }

  &--black {
    background-color: $bgcolor--black-pale;
  }

  &__description {
    @include font('Inter', 14px, 400);
    line-height: 22px;
    margin-top: 24px;

    &--white {
      color: $text-color--chinese-black;
    }

    &--black {
      color: $text-color--white-primary;
    }
  }

  @media screen and (max-width: 820px) {
    grid-row: 1 / 4;
  }

  @media screen and (max-width: 660px) {
    padding: 24px 34px;

    &__image {
      width: 134.42px;
      height: auto;
    }

    &__description {
      font-size: 11px;
      line-height: 16px;
      margin-top: 19px;
    }
  }
}
</style>

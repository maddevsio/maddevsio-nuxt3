<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

defineProps({
  icon: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  title: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    default: '',
  },

  showBottomDivider: {
    type: Boolean,
    default: true,
  },

  colorTheme: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <div
    :class="[
      `process-inline-slice__card process-inline-slice__card--${colorTheme}`,
      { 'process-inline-slice__card--with-divider': showBottomDivider }
    ]"
  >
    <img
      v-if="icon.url"
      loading="lazy"
      :src="icon.url"
      :alt="icon.alt || 'Icon'"
      :width="icon.dimensions.width"
      :height="icon.dimensions.height"
      class="process-inline-slice__icon"
    >
    <h3
      v-if="title"
      :class="`process-inline-slice__title process-inline-slice__title--${colorTheme}`"
    >
      {{ title }}
    </h3>
    <p
      v-if="description"
      :class="`process-inline-slice__description process-inline-slice__description--${colorTheme}`"
      v-html="description.replace(/\n/g, '<br />')"
    />
  </div>
</template>
<style scoped lang="scss">
.process-inline-slice {
  &__card {
    display: flex;
    align-items: flex-start;
    gap: 40px;

    &--with-divider {
      padding-bottom: 30px;
      border-bottom: 1px solid #36383A;

      &:last-child {
        border: none;
        padding: 0;
      }
    }

    &--white {
      &.process-inline-slice__card--with-divider {
        border-color: #f1f1f1;
      }
    }
  }

  &__icon {
    width: 50px;
    height: 50px;
    display: block;
    margin-top: 6px;
  }

  &__title {
    @include font('Inter', 20px, 600);
    line-height: 30px;
    letter-spacing: -1px;
    color: $text-color--white-primary;
    max-width: 240px;
    min-width: 240px;

    &--black {
      color: $text-color--white-primary;
    }

    &--white {
      color: $text-color--black-oil;
    }
  }

  &__description {
    @include font('Inter', 18px, 400);
    line-height: 30px;
    letter-spacing: -1px;

    &--black {
      color: $text-color--grey-opacity-20-percent;
    }

    &--white {
      color: rgba(17,17,17,.6);
    }
  }

  @media screen and (max-width: 1023px) {
    &__card {
      gap: 20px 37px;
      flex-wrap: wrap;
    }

    &__icon {
      width: 40px;
      height: 40px;
    }

    &__title {
      font-size: 18px;
      line-height: 27px;
      max-width: 328px;
      min-width: unset;
    }

    &__description {
      width: 100%;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    &__card {
      column-gap: 30px;
    }

    &__icon {
      width: 30px;
      height: 30px;
    }

    &__title {
      width: 78%;
    }
  }
}
</style>

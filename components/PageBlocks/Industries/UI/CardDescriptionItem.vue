<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

defineProps({
  description: {
    type: String,
    required: true,
    default: '',
  },

  icon: {
    type: Object as PropType<ImageField>,
    required: true,
    default: () => ({}),
  },

  linkToIndustryPage: {
    type: String,
    default: '',
  },

  cardBackgroundColor: {
    type: String,
    default: 'white',
  },

  cardTextColor: {
    type: String,
    default: 'white',
  },

  colorTheme: {
    type: String,
    default: 'white',
  },

  goToPage: {
    type: Function,
    default: () => {},
  },
})
</script>
<template>
  <Component
    :is="linkToIndustryPage ? 'a' : 'div'"
    :href="linkToIndustryPage && linkToIndustryPage"
    :class="`industries-card-description__card ${cardBackgroundColor}`"
    @click.prevent="goToPage(linkToIndustryPage)"
  >
    <img
      v-if="icon && icon.url"
      loading="lazy"
      :src="icon.url"
      :alt="icon.alt || 'Icon'"
      :width="icon.dimensions.width"
      :height="icon.dimensions.height"
      class="industries-card-description__icon"
    >
    <p
      v-if="description"
      :class="`industries-card-description__text ${cardTextColor}`"
      v-html="description.replace(/\n/g, '<br />')"
    />
    <span
      v-if="linkToIndustryPage"
      :class="`industries-card-description__arrow industries-card-description__arrow--${colorTheme}`"
    />
  </Component>
</template>
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';
.industries-card-description {
  &__card {
    min-height: 180px;
    padding: 20px 40px 20px 30px;
    display: flex;
    flex-direction: column;
    row-gap: 28px;
    border-radius: 9px;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;
    position: relative;

    @media (hover: hover) {
      &:hover {
        opacity: 1;

        .industries-card-description__text {
          transform: translateY(-10px);
        }

        .industries-card-description__icon {
          filter: grayscale(0);
        }
      }
    }

    @media (hover: none) {
      opacity: 1;

      .industries-card-description__text {
        transform: translateY(0px);
      }

      .industries-card-description__icon {
        filter: grayscale(0);
      }
    }

    @media screen and (max-width: 768px) {
      padding: 15px 35px 15px 15px;
      min-height: unset;
      row-gap: 20px;
    }

    @media screen and (max-width: 550px) {
      row-gap: 15px;
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
    display: block;
    filter: grayscale(100) contrast(0.5);
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }

  &__text {
    @include font('Inter', 20px, 400);
    line-height: 26px;
    transform: translateY(0px);
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 23.4px;
    }
  }

  &__arrow {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 12px;
    height: 14px;

    &--black {
      @include arrow-top-right-icon($bgcolor--white-primary);
    }

    &--white {
      @include arrow-top-right-icon($bgcolor--black-pale);
    }

    @media screen and (max-width: 768px) {
      width: 9px;
      height: 10px;
    }
  }
}
</style>

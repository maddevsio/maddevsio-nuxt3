<script setup lang="ts">
import { h, type PropType } from 'vue'
import type { ImageField } from '@prismicio/types'

const { titleTag, title } = defineProps({
  titleTag: {
    type: String,
    default: 'h3',
  },

  title: {
    type: String,
    default: '',
  },

  titleColor: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    default: '',
  },

  descriptionColor: {
    type: String,
    default: '',
  },

  icon: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },

  cardBackgroundColor: {
    type: String,
    default: '',
  },
})
const VNodeTitle = () => h(titleTag, { innerHTML: title })
</script>
<template>
  <div
    :class="`card-with-colored-title-and-icon__card ${cardBackgroundColor}`"
  >
    <VNodeTitle
      v-if="title"
      :class="`card-with-colored-title-and-icon__title ${titleColor}`"
    />
    <p
      v-if="description"
      :class="`card-with-colored-title-and-icon__description ${descriptionColor}`"
    >
      {{ description }}
    </p>
    <img
      v-if="icon && icon.url"
      loading="lazy"
      :src="icon.url"
      :alt="icon.alt || title"
      :width="icon.dimensions.width"
      :height="icon.dimensions.height"
      class="card-with-colored-title-and-icon__icon"
    >
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/colorClasses/colors.scss';

.card-with-colored-title-and-icon {
  &__card {
    padding: 20px 50px 30px 40px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }

  &__title {
    @include font('Inter', 40px, 800);
    line-height: 52px;
    letter-spacing: -1px;
    min-height: 104px;
  }

  &__description {
    @include font('Inter', 18px, 400);
    line-height: 23.4px;
    letter-spacing: -1px;
  }

  &__icon {
    width: 154px;
    height: auto;
    max-height: 161px;
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @include laptop-media-query {
    &__card {
      padding-right: 30px;
    }

    &__title {
      line-height: 48px;
      min-height: 80px;
    }
  }

  @media screen and (max-width: 1210px) {
    &__title {
      min-height: unset;
    }
  }

  @media screen and (max-width: 1026px) {
    &__title {
      font-size: 32px;
      line-height: 41.6px;
    }

    &__icon {
      width: 107px;
    }
  }

  @media screen and (max-width: 640px) {
    &__card {
      padding: 20px;
      row-gap: 15px;
    }

    &__title {
      font-size: 28px;
      line-height: 36.4px;
    }
  }
}
</style>

<script setup lang="ts">
import type { FlexibleParagraphProps } from '~/components/Typography/interfaces/IFlexibleParagraph'
import { FlexibleParagraph } from '~/components/Typography/classes/FlexibleParagraph'

interface Props {
  slice: FlexibleParagraphProps
}
const { slice } = defineProps<Props>()
const {
  type,
  colorTheme,
  text,
  tag,
  position,
  cssVars,
  textSizesClassnames,
} = new FlexibleParagraph(slice)

const VNodeComponent = () => h(tag, { innerHTML: text })
</script>
<template>
  <section
    class="paragraph-slice"
    :class="[colorConverterToClass('slice-bg', colorTheme),
             `paragraph-slice--${colorTheme}`]"
  >
    <div
      class="paragraph-slice__container container"
      :class="[
        `paragraph-slice__container--${position}`,
      ]"
    >
      <VNodeComponent
        :class="[
          `paragraph-slice-text`,
          ...textSizesClassnames,
          `paragraph-slice-text--${type}`,
        ]"
        :style="cssVars"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/colorClasses/colors.scss';
.paragraph-slice {

  &--white {
    color: $text-color--black-lighter;
  }

  &--black {
    color: $text-color--white;
  }

  &__container {
    display: flex;
    align-items: flex-start;

    // Positions
    &--left {
      justify-content: flex-start;
    }

    &--center {
      justify-content: center;
    }

    &--right {
      justify-content: flex-end;
    }
  }

  &-text {
    width: 100%;
    display: block;
    color: inherit;
    letter-spacing: -0.013em;
    text-align: var(--text-align);
    max-width: var(--max-width);

    // Types
    &--list {
      justify-content: flex-start;

      &::before {
        content: '•';
        display: inline-block;
        color: inherit;
        margin-right: 8px;
        margin-left: 8px;
      }
    }
  }

  &--text-size-xl {
    @include font-sizes-flexible-parag(var(--font-weight));
  }

  &--text-size-lg {
    @media screen and (max-width: 1440px) {
      @include font-sizes-flexible-parag(var(--font-weight));
    }
  }

  &--text-size-md {
    @media screen and (max-width: 1200px) {
      @include font-sizes-flexible-parag(var(--font-weight));
    }
  }

  &--text-size-sm {
    @media screen and (max-width: 1024px) {
      @include font-sizes-flexible-parag(var(--font-weight));
    }
  }

  &--text-size-xs {
    @media screen and (max-width: 768px) {
      @include font-sizes-flexible-parag(var(--font-weight));
    }
  }
}
</style>

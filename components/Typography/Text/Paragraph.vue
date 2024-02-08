<script setup lang="ts">
import type { ParagraphProps } from '~/components/Typography/interfaces/IParagraph'
import { Paragraph } from '~/components/Typography/classes/Paragraph'

interface Props {
  slice: ParagraphProps
}

const { slice } = defineProps<Props>()
const {
  position,
  maxWidth,
  text,
  background,
  themeColorClass,
  paragraphType,
  textSizesClassnames,
} = new Paragraph(slice)
</script>
<template>
  <section
    :class="`paragraph ${themeColorClass}`"
    :style="{ backgroundColor: background }"
  >
    <div
      class="paragraph__container container"
      :class="`paragraph__container--${position}`"
    >
      <p
        :class="[
          `paragraph-text`,
          ...textSizesClassnames,
          `paragraph-text--${paragraphType}`,
        ]"
        :style="`max-width: ${maxWidth}`"
        v-html="text"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.paragraph {
  &__container {
    display: flex;
    align-items: flex-start;

    // Positions
    &--left {
      justify-content: flex-start;

      p {
        text-align: left;
      }
    }

    &--center {
      justify-content: center;

      p {
        text-align: center;
      }
    }

    &--right {
      justify-content: flex-end;

      p {
        text-align: right;
      }
    }
  }

  &-text {
    width: auto;
    max-width: 100%;
    display: block;
    letter-spacing: -1.3%;

    &--white-theme {
      color: $text-color--black-lighter;
    }

    &--black-theme {
      color: $text-color--white;
    }

    // Types
    &--list {
      display: flex;
      align-items: flex-start;
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

  // Sizes
  &--text-size-xl {
    @include font-sizes-paragraph();
  }

  &--text-size-lg {
    @media screen and (max-width: 1440px) {
      @include font-sizes-paragraph();
    }
  }

  &--text-size-md {
    @media screen and (max-width: 1200px) {
      @include font-sizes-paragraph();
    }
  }

  &--text-size-sm {
    @media screen and (max-width: 1024px) {
      @include font-sizes-paragraph();
    }
  }

  &--text-size-xs {
    @media screen and (max-width: 768px) {
      @include font-sizes-paragraph();
    }
  }
}
</style>

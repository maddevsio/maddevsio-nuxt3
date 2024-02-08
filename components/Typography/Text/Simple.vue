<script setup lang="ts">
import type { SimpleTextProps } from '~/components/Typography/interfaces/ISimpleText'
import { SimpleText } from '~/components/Typography/classes/SimpleText'

interface Props {
  slice: SimpleTextProps
  large?: boolean
}

const { slice } = defineProps<Props>()
const {
  text,
  colorThemeClass,
  sliceBackground,
} = new SimpleText(slice)
</script>

<template>
  <section
    class="text-slice"
    :class="colorThemeClass"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div class="container">
      <p
        class="text-slice__content"
        :class="{ 'text-slice__content--large': large }"
      >
        {{ text }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.text-slice {
  word-break: break-word;

  &--white-theme {
    color: $text-color--black-lighter;
  }
  &--black-theme {
    color: $text-color--white;
  }

  &__content {
    @include font('Inter', 24px, 600);
    line-height: 35px;
    letter-spacing: -0.013em;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: 21px;
      line-height: 30px;
    }

    &--large {
      font-weight: 600;
      font-size: 60px;
      line-height: 70px;

      @media screen and (max-width: 1024px) {
        font-size: 32px;
        line-height: 40px;
      }

      @media screen and (max-width: 768px) {
        font-size: 28px;
      }
    }
  }
}
</style>

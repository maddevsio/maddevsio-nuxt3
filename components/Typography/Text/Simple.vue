<script setup lang="ts">
interface Props {
  slice: {
    primary: {
      colorTheme: string
      text: string
    }
  }
  large?: boolean
}

const { slice } = defineProps<Props>()

const text = slice.primary.text
const sliceBackground = setSliceBackground(slice.primary.colorTheme || 'white')
const colorThemeClass = slice.primary.colorTheme === 'black' ? 'text-slice--black-theme' : 'text-slice--white-theme'
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

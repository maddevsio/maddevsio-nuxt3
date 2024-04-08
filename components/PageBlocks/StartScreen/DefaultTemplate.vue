<script setup lang="ts">
import type { ImageField } from '@prismicio/types'

interface Props {
  gradient: string
  image: ImageField
  imageOpacity: number
  title: string
  subtitle: string
  background?: string | null
}

defineProps<Props>()

const sectionText = ref<HTMLElement | null>(null)
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
</script>
<template>
  <section
    id="transparent-header-area"
    class="start-screen-slice"
    :style="{ 'background': gradient }"
  >
    <SharedUIPictureFullScreen
      :src="image.url"
      :height="639"
      :width="1680"
      :alt="image.alt || title"
      :lazy="false"
      :style="{
        opacity: imageOpacity,
        backgroundColor: background,
      }"
      class="start-screen-slice__image"
    />
    <div class="container">
      <div
        ref="sectionText"
        :style="{ opacity: sectionTextOpacity }"
        class="start-screen-slice__content"
      >
        <h1
          class="start-screen-slice__title"
          v-html="title"
        />
        <p
          v-if="subtitle"
          data-testid="start-screen-slice__subtitle"
          class="start-screen-slice__subtitle"
          v-html="subtitle"
        />
        <slot name="button" />
      </div>
    </div>
    <slot name="modal" />
  </section>
</template>

<style scoped lang="scss">
.start-screen-slice {
  position: relative;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213);
  overflow: hidden;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    background-color: $bgcolor--black;
  }

  &__content {
    text-align: center;
    z-index: 2;
    width: 100%;
    max-width: 1113px;
  }

  &__title {
    @include font("Inter", 64px, 700);
    line-height: 105px;
    letter-spacing: -2px;
    color: $text-color--white-primary;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      font-size: 76px;
      line-height: 72px;
    }

    @media screen and (max-width: 580px) {
      margin-bottom: 27px;
      font-size: 42px;
      line-height: 48px;
    }

    :deep(.large) {
      @include font("Inter", 100px, 800);
      line-height: 105px;

      @media screen and (max-width: 768px) {
        font-size: 76px;
        line-height: 110px;
      }

      @media screen and (max-width: 580px) {
        font-size: 42px;
        line-height: 70px;
      }
    }

    :deep(.medium) {
      @include font("Inter", 100px, 700);
      line-height: 105px;

      @media screen and (max-width: 768px) {
        font-size: 76px;
        line-height: 72px;
      }

      @media screen and (max-width: 580px) {
        margin-bottom: 10px;
        font-size: 42px;
        line-height: 48px;
      }
    }

    :deep(.small) {
      @media screen and (max-width: 768px) {
        font-size: 42px;
        line-height: 25px;
        display: block;
      }

      @media screen and (max-width: 580px) {
        font-size: 32px;
        line-height: 36px;
      }
    }
  }

  &__subtitle {
    @include font("Inter", 32px, 600);
    line-height: 44px;
    letter-spacing: -1px;
    color: $text-color--white-primary;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 44px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 35px;
    }

    @media screen and (max-width: 580px) {
      font-size: 21px;
      line-height: 30px;
    }
  }

  :deep(br) {
    @media only screen and (max-width: 520px) {
      display: none;
    }
  }
}

.start-screen-with-image {
  height: auto;
}
</style>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField } from '@prismicio/client'

defineProps({
  image: {
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
})
</script>
<template>
  <section class="head-start-screen">
    <div class="head-start-screen__background">
      <LazySharedUIPictureFullScreen
        v-if="image && image.url"
        :src="image.url"
        :alt="image.alt || 'Image'"
        :width="image.dimensions.width"
        :height="image.dimensions.height"
        :lazy="false"
        class="head-start-screen__background-image"
      />
    </div>
    <div class="container">
      <h1
        v-if="title"
        class="head-start-screen__title"
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="head-start-screen__description"
      >
        {{ description }}
      </p>
      <slot />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.head-start-screen {
  position: relative;
  padding: 186px 0 96px;
  box-sizing: border-box;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 75%;
      background: linear-gradient(180deg, rgba(17, 17, 17, 0) 16.51%, #111111 100%);
      z-index: 0;
    }

    &-image {
      display: block;
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  }

  &__title, &__description {
    color: $text-color--white-primary;
  }

  &__title {
    @include font('Inter', 100px, 700);
    line-height: 109%;
    margin-bottom: 35px;
  }

  &__description {
    @include font('Inter', 24px, 600);
    line-height: 130%;
  }
}

@media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
  .head-start-screen {
    &__title {
      font-size: 60px;
      margin-bottom: 32px;
    }
  }
}

@media screen and (max-width: 768px) {
  .head-start-screen {
    padding: 177px 0 48px;

    &__title {
      font-size: 45px;
    }

    &__description {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .head-start-screen {
    padding: 125px 0 48px;

    &__title {
      font-size: 31px;
      line-height: 130%;
    }

    &__description {
      font-size: 20px;
    }
  }
}
</style>

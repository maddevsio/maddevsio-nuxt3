<script setup lang="ts">
import type { CardWithImageProps } from '~/components/PageBlocks/CardWithImage/interfaces/ICardWithImage'
import { CardWithImage } from '~/components/PageBlocks/CardWithImage/classes/CardWithImage'

interface Props {
  slice: CardWithImageProps
}
const { slice } = defineProps<Props>()
const {
  title,
  description,
  background,
  textColor,
  image,
  haveImage,
} = new CardWithImage(slice)
</script>
<template>
  <section class="section card-with-image">
    <div class="container">
      <div
        class="card-with-image__item"
        :style="{backgroundColor: background}"
      >
        <div
          class="card-with-image__text-content"
          :class="!haveImage() && 'card-with-image__text-content-full'"
        >
          <PrismicRichText
            v-if="title"
            :field="title"
            class="card-with-image__title"
            :html-serializer="prismicHtmlSerializer"
            :style="{color: textColor}"
          />
          <p
            v-if="description"
            class="card-with-image__description"
            :style="{color: textColor}"
          >
            {{ description }}
          </p>
        </div>
        <div
          v-if="haveImage()"
          class="card-with-image__image-box"
        >
          <NuxtImg
            provider="prismic"
            loading="lazy"
            :src="image.url"
            :alt="image.alt"
            class="card-with-image__image"
            :width="image.dimensions!.width"
            :height="image.dimensions!.height"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section {
  background: $bgcolor--white-primary;
}

.container {
  max-width: 817px;
}

.card-with-image {
  &__item {
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      position: relative;
    }
    @media screen and (max-width: 676px) {
      flex-direction: column;
    }
  }

  &__text-content {
    padding: 39px 43px;
    width: 53%;
    @media screen and (max-width: 768px) {
      width: 62%;
      padding: 34.33px 33px;
    }
    @media screen and (max-width: 676px) {
      width: 100%;
      padding: 30px 21px 0;
      box-sizing: border-box;
    }
  }

  &__text-content-full {
    width: 100%;
    @media screen and (max-width: 676px) {
      padding-bottom: 30px;
    }
  }

  &__title {
    margin-bottom: 10px;
    width: 135%;
    position: relative;
    z-index: 2;

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font('Inter', 32px, 700);
      line-height: 130%;
      letter-spacing: -0.4px;
    }

    @media screen and (max-width: 980px) {
      width: 170%;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      :deep(h1),
      :deep(h2),
      :deep(h3),
      :deep(h4),
      :deep(h5),
      :deep(h6) {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 576px) {
      :deep(h1),
      :deep(h2),
      :deep(h3),
      :deep(h4),
      :deep(h5),
      :deep(h6) {
        font-size: 18px;
        line-height: 22px;
        white-space: initial;
      }
      margin-bottom: 14px;
    }
  }

  &__description {
    @include font('Inter', 17px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
  }

  &__image-box {
    width: 36%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 33%;
      height: 100%;
    }
    @media screen and (max-width: 676px) {
      position: relative;
      inset: unset;
      width: 100%;
      height: 147px;
      display: flex;
    }
  }

  &__image {
    width: auto;
    height: auto;
    display: block;
    max-width: 100%;
    max-height: 100%;
    @media screen and (max-width: 676px) {
      position: relative;
      bottom: 0;
      height: 100%;
      width: auto;
      margin-left: auto;
      margin-right: 30px;
    }
  }
}
</style>

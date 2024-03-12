<script setup lang="ts">
import type { PropType } from 'vue'
import type { DigestProjectCardDefaultProps } from '~/components/PageBlocks/Digest/interfaces/IDigestProjectCardDefault'
import { DigestProjectCardDefault } from '~/components/PageBlocks/Digest/classes/DigestProjectCardDefault'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<DigestProjectCardDefaultProps>,
    default: () => ({}),
  },
})

const {
  image,
  description,
  url,
  external,
  buttonText,
  showBorderBottom,
} = new DigestProjectCardDefault(slice)
</script>

<template>
  <section class="digest-project-card">
    <div class="digest-project-card__image-wrapper">
      <NuxtImg
        v-if="image.url"
        provider="prismic"
        loading="lazy"
        :src="image.url"
        :alt="image.alt || 'Card cover'"
        width="610"
        height="332"
        class="digest-project-card__image"
      />
    </div>
    <PrismicRichText
      v-if="$prismic.asText(description)"
      :field="description"
      class="digest-project-card__description"
      :html-serializer="blogHtmlSerializer"
    />
    <LazyPageBlocksDigestUICardButton
      :url="url"
      :external="external"
      :button-text="buttonText"
    />
    <hr
      v-if="showBorderBottom"
      class="digest-project-card__divider"
    >
  </section>
</template>

<style lang="scss" scoped>
.digest-project-card {
  background-color: $bgcolor--white-primary;

  &__image-wrapper {
    margin-bottom: 32px;
  }

  &__image {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__description {
    :deep(a) {
      color: $text-color--black-oil;
      text-decoration: underline;
    }

    :deep(p) {
      @include font('Inter', 17px, 400);
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--black-oil;
      margin: 0 0 24px;

      &:last-child {
        margin: 0 0 32px;

        @media screen and (max-width: 530px) {
          margin-bottom: 24px;
        }
      }
    }
  }

  &__divider {
    display: block;
    width: 100%;
    height: 1px;
    margin: 48px 0 0;
    background: $bgcolor--grey-cases;
    border: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>

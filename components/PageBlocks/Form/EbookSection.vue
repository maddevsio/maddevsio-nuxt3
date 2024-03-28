<script setup lang="ts">
import type { PropType } from 'vue'
import type { EbookFormSectionProps } from '~/components/PageBlocks/Form/interfaces/IEbookFormSection'
import { EbookFormSection } from '~/components/PageBlocks/Form/classes/EbookFormSection'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<EbookFormSectionProps>,
    default: () => ({}),
  },
})
const {
  title,
  image,
  ebookName,
  ebookPath,
  sendPulseTemplateId,
  containerSize,
} = new EbookFormSection(slice)
</script>
<template>
  <section class="form-slice">
    <div
      class="container"
      :style="`max-width: ${containerSize}px`"
    >
      <PrismicRichText
        v-if="$prismic.asText(title)"
        :field="title"
        class="form-slice__title"
        data-testid="form-slice__title"
        :html-serializer="prismicHtmlSerializer"
      />
      <div
        class="form-slice__items"
      >
        <LazyWidgetsFormEbook
          class="form-slice__item"
          :ebook-path="ebookPath"
          :ebook-name="ebookName"
          :send-pulse-template-id="sendPulseTemplateId"
          :form-uid="ebookName"
          :location="ebookName"
        />
        <div class="form-slice__item-img">
          <img
            v-if="image && image.url"
            loading="lazy"
            :src="image.url"
            :alt="image.alt || 'Image'"
            class="form-slice__image"
            width="349.51"
            height="423.34"
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.form-slice {
  .container {
    max-width: 1026px;
  }

  background-color: $bgcolor--white-primary;
  &__title {
    margin-bottom: 32px;
    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      list-style-position: -1.3px;
      color: $text-color--red;

      @media screen and (max-width: 580px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
      }
    }
  }

  &__items {
    border: 1px solid $border-color--grey-20-percent;
    border-radius: 4px;
    padding: 58px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1024px) {
      padding: 40px;
    }

    @media screen and (max-width: 680px) {
      flex-direction: column-reverse;
      padding: 32px;
    }
  }

  &__item {
    width: 38%;
    @media screen and (max-width: 1024px) {
      width: 46%;
    }

    @media screen and (max-width: 680px) {
      width: 100%;
      padding: 0;
    }
  }

  &__item-img {
    width: 39%;
    @media screen and (max-width: 1024px) {
      width: 46%;
    }

    @media screen and (max-width: 680px) {
      width: 65%;
      margin-bottom: 32px;
    }
  }

  &__image {
    width: auto;
    height: auto;
    display: block;
    max-width: 100%;
    max-height: 423.34px;
    margin: 0 auto;
  }
}
</style>

<script setup lang="ts">
import type { BuildAndRisksProps } from '~/components/BuildAndRisks/interfaces/IBuildAndRisks'
import { BuildAndRisks } from '~/components/BuildAndRisks/classes/BuildAndRisks'

interface Props {
  slice: BuildAndRisksProps
}

const { slice } = defineProps<Props>()
const {
  backgroundColor,
  buttonBgColor,
  buttonLink,
  buttonText,
  buttonTextColor,
  description,
  image,
  outerBgColor,
  textColor,
  title,
} = new BuildAndRisks(slice)
const { isMobile } = useDevice()
</script>
<template>
  <section
    class="main-block-wrapper"
    :style="{ backgroundColor: outerBgColor }"
  >
    <section
      class="container"
    >
      <article
        class="main-block"
        :style="{ backgroundColor }"
      >
        <div class="main-block__text-content">
          <PrismicRichText
            v-if="title.length"
            :field="title"
            class="main-block__title"
            :html-serializer="prismicHtmlSerializer"
            :style="`color: ${textColor}`"
          />
          <PrismicRichText
            v-if="description.length"
            :field="description"
            class="main-block__description"
            :style="`color: ${textColor}`"
            :html-serializer="prismicHtmlSerializer"
          />
          <figure
            v-if="isMobile"
            class="main-block__small-screen-image"
          >
            <NuxtImg
              v-if="image.url"
              provider="prismic"
              loading="lazy"
              :width="isMobile ? 202 : 338"
              :height="isMobile ? 285 : 477"
              :src="image.url.replace(/\?.*/, '?auto=compress,format')"
              :alt="image.alt || 'Image'"
              sizes="mobile:200px tablet:303px desktop:338px"
              class="main-block__img-block-image"
            />
          </figure>
          <a
            :href="buttonLink"
            target="_blank"
            class="main-block__button"
            :style="`background-color: ${buttonBgColor}; color: ${buttonTextColor};`"
          >
            {{ buttonText }}
          </a>
        </div>
        <figure
          v-if="!isMobile"
          class="main-block__img-block"
        >
          <NuxtImg
            v-if="image.url"
            provider="prismic"
            loading="lazy"
            width="338"
            height="477"
            :src="image.url.replace(/\?.*/, '?auto=compress,format')"
            :alt="image.alt || 'Image'"
            sizes="mobile:200px tablet:303px desktop:338px"
            class="main-block__img-block-image"
          />
        </figure>
      </article>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.main-block-wrapper {
  width: 100%;
  height: auto;
}
.main-block {
  padding: 84px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 920px) {
    padding: 60px 34px;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  &__text-content {
    width: 50%;
    @media screen and (max-width: 920px) {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 48px;

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      letter-spacing: -1.3px;
      @media screen and (max-width: 580px) {
        @include font('Inter', 28px, 600);
        line-height: 32px;
      }
    }
  }

  &__description {
    margin-bottom: 48px;
    :deep(p) {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.4px;
      margin: 12px 0;
      & + p {
        margin-top: 24px;
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__button {
    display: inline-block;
    border-radius: 4px;
    color: $text-color--grey-pale;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding: 14px 60px;
    text-align: center;
    @media screen and (max-width: 920px) {
      width: 50%;
      padding: 14px 0;
    }
    @media screen and (max-width: 375px) {
      display: block;
      width: 100%;
      padding: 14px 0;
    }
  }
  &__img-block {
    width: 30%;
    @media screen and (max-width: 1024px) {
      width: 45%;
    }
    @media screen and (max-width: 920px) {
      display: none;
    }
  }
  &__img-block-image {
    width: 100%;
    height: auto;
    display: block;
  }
  &__small-screen-image {
    display: none;
    margin-bottom: 50px;
    @media screen and (max-width: 920px) {
      display: block;
      width: 50%;
    }
    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }
}
</style>

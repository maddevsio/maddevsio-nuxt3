<script setup lang="ts">
import type { StartScreenCaseStudyProps } from '~/components/StartScreen/interfaces/IStartScreenCaseStudy'
import { StartScreenCaseStudy } from '~/components/StartScreen/classes/StartScreenCaseStudy'

interface Props {
  slice: StartScreenCaseStudyProps
}

const { slice } = defineProps<Props>()
const {
  videoPath,
  poster,
  title,
  description,
  caseLogoImage,
  caseTag,
  caseTagEncodedUri,
  clickableCaseTag,
  backgroundOverlay,
} = new StartScreenCaseStudy(slice)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section
    id="transparent-header-area"
    class="case-study-start-screen"
  >
    <NuxtImg
      v-if="poster.url && !videoPath"
      class="case-study-start-screen__image"
      provider="prismic"
      preload
      sizes="mobile:380px tablet:512px desktop:100vw"
      :src="poster.url"
      :alt="poster.alt || title"
      :width="poster.dimensions.width"
      :height="poster.dimensions.height"
    />
    <video
      v-if="videoPath"
      muted
      loop
      autoplay
      playsinline
      width="100%"
      height="100%"
      class="case-study-start-screen__video"
      :poster="poster.url"
    >
      <source
        :src="$getMediaFromS3(videoPath)"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
    <div class="container case-study-start-screen__container">
      <div class="case-study-start-screen__content">
        <div class="case-study-start-screen__content-left">
          <div class="case-study-start-screen__badges">
            <span class="case-study-start-screen__badges-case-study">
              Case Study
            </span>
            <NuxtLink
              v-if="clickableCaseTag && caseTag"
              :to="`/case-studies/?tag=${caseTagEncodedUri}`"
              class="case-study-start-screen__badges-tag"
            >
              {{ caseTag }}
            </NuxtLink>
            <span
              v-else-if="!clickableCaseTag && caseTag"
              class="case-study-start-screen__badges-tag"
            >
              {{ caseTag }}
            </span>
          </div>
          <h1
            v-if="title"
            class="case-study-start-screen__title"
            v-html="title"
          />
          <PrismicRichText
            v-if="$prismic.asText(description)"
            :field="description"
            data-testid="accordion-slice__title"
            class="case-study-start-screen__description"
            :html-serializer="prismicHtmlSerializer"
          />
        </div>
        <div
          class="case-study-start-screen__content-right"
        >
          <img
            v-if="caseLogoImage.url"
            :src="caseLogoImage.url"
            :alt="caseLogoImage.alt || `${title} logo`"
            :width="caseLogoImage.dimensions.width"
            :height="caseLogoImage.dimensions.height"
            class="case-study-start-screen__logo"
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.case-study-start-screen {
  position: relative;
  height: 100dvh;
  min-height: 700px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 1;
    background: v-bind('backgroundOverlay');
  }

  &__video,
  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-left {
      width: 75%;
    }

    &-right {
      width: max-content;
    }
  }

  &__badges {
    display: flex;
    gap: 18px;
    margin-bottom: 48px;

    &-case-study,
    &-tag {
      @include font('Inter', 14px, 400);
      line-height: 166%;
      width: 120px;
      padding: 4px 14px;
      letter-spacing: -0.1px;
      text-align: center;
      background-color: $bgcolor--red;
      color: $text-color--white-primary;
      box-sizing: border-box;
    }

    &-tag {
      min-width: 120px;
      width: max-content;
      color: $text-color--black-pale;
      background-color: $bgcolor--white-primary;
    }
  }

  &__title {
    @include font('Inter', 64px, 700);
    line-height: 109%;
    color: $text-color--white;
  }

  &__description {
    margin-top: 48px;

    :deep(p) {
      @include font('Inter', 24px, 400);
      line-height: 130%;
      margin-bottom: 12px;
      color: $text-color--white-primary;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(a) {
      text-decoration: underline;
      color: $text-color--yellow;
    }
  }

  &__logo {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (   min--moz-device-pixel-ratio: 2) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (     -o-min-device-pixel-ratio: 2/1) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (        min-device-pixel-ratio: 2) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (                min-resolution: 192dpi) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (                min-resolution: 2dppx) and (min-width: 1027px) and (max-width: 1440px),
  only screen and (min-width: 1027px) and (max-width: 1280px) {
    &__title {
      font-size: 48px;
    }

    &__description {
      margin-top: 48px;

      :deep(p) {
        font-size: 20px;
        line-height: 150%;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    &__content {
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;

      &-left {
        margin-top: 37px;
      }
    }

    &__badges {
      margin-bottom: 20px;
    }

    &__title {
      font-size: 28px;
      line-height: 120%;
    }

    &__description {
      margin-top: 20px;

      :deep(p) {
        font-size: 20px;
        line-height: 150%;
      }
    }

    &__logo {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 575px;

    &__content {
      &-left {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 576px) {
    &__logo {
      width: 40%;
    }

    &__title {
      font-size: 24px;
    }

    &__description {
      :deep(p) {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }
}
</style>

<script setup lang="ts">
const sectionText = ref<HTMLElement>()
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)

const { isMobile } = useCheckMobile(680)

const sourcePaths = {
  desktop: '/images/OpenSource/webp/programmer-desktop.webp',
  laptop: '/images/OpenSource/webp/programmer-laptop.webp',
  tablet: '/images/OpenSource/webp/programmer-tablet.webp',
  mobile: '/images/OpenSource/webp/programmer-mobile.webp',
}
</script>

<template>
  <div
    id="transparent-header-area"
    class="open-source-banner"
  >
    <SharedUIAdaptiveImage
      :source-paths="sourcePaths"
      :width="isMobile ? 414 : 1920"
      :height="isMobile ? 780 : 977"
      :alt="'Programmer'"
      class="open-source-banner__image"
    />
    <div class="container">
      <div
        ref="sectionText"
        class="open-source-banner__content"
        :style="{opacity: sectionTextOpacity}"
      >
        <h1 class="open-source-banner__title">
          The power <br> of open source
        </h1>
        <p class="open-source-banner__subtitle">
          While we love writing code, nothing excites us more than collaborating with other members of the tech community.
          We love building with new and emerging technologies here at Mad Devs. Making the world a better place, one line of code at a time.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.open-source-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 62px;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 75%, $bgcolor--black 100%);
  overflow: hidden;

  :deep(.image-background) {
    position: absolute;
    top: 0;
    left: 0;
    object-position: top;
    z-index: -1;
  }

  &__content {
    z-index: 2;
    display: block;
    margin: 0 auto;
    max-width: 1028px;
    text-align: center;
  }

  &__title {
    color: $text-color--white;
    font-size: 100px;
    line-height: 96px;
    letter-spacing: -0.04em;
  }

  &__subtitle {
    margin-top: 64px;
    font-size: 32px;
    letter-spacing: -0.013em;
    line-height: 44px;
    color: $text-color--silver;
  }

  @media screen and (max-width: 1024px) {
    height: 85vh;
    &__title {
      font-size: 80px;
      line-height: 88px;
    }

    &__subtitle {
      margin-top: 62px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 52px;
      line-height: 57px;
    }

    &__subtitle {
      margin-top: 21px;
      font-size: 21px;
      line-height: 30px;
    }
  }
}
</style>

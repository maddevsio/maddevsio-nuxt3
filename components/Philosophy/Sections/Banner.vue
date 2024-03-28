<script setup lang="ts">
const sectionText = ref<HTMLElement>()
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
const { isMobile } = useCheckMobile(680)
const sourcePaths = {
  desktop: '/images/OurPhilosophy/webp/banner-philosophy.webp',
  laptop: '/images/OurPhilosophy/webp/banner-philosophy-laptop.webp',
  tablet: '/images/OurPhilosophy/webp/banner-philosophy-tablet.webp',
  mobile: '/images/OurPhilosophy/webp/banner-philosophy-mobile.webp',
}
</script>

<template>
  <section
    id="transparent-header-area"
    class="our-philosophy-banner"
  >
    <SharedUIAdaptiveImage
      :source-paths="sourcePaths"
      :width="isMobile ? 414 : 1920"
      :height="isMobile ? 765 : 839"
      :alt="'Team'"
      class="our-philosophy-banner__image"
    />
    <div class="container">
      <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
      <div
        ref="sectionText"
        class="our-philosophy-banner__content"
        :style="{opacity: sectionTextOpacity}"
      >
        <h1 class="our-philosophy-banner__title">
          Mad Devs’ Philosophy
        </h1>
        <p class="our-philosophy-banner__subtitle">
          Our mission, principles,<br> and values
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our-philosophy-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  min-height: 568px;
  padding-top: 62px; // height of header component
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 70%, #111213);
  overflow: hidden;

  :deep(.image-background) {
    position: absolute;
    top: 0;
    left: 0;
    object-position: top;
    z-index: -1;
    opacity: 0.8;
    @media screen and (max-width: 430px) {
      object-position: 18%;
    }
  }

  &__content {
    z-index: 2;
    display: block;
    margin: 0 auto;
    max-width: 816px;
    text-align: center;
  }

  &__title {
    @include font('Poppins', 100px, 700);
    line-height: 109%;
    color: $text-color--white;
  }

  &__subtitle {
    @include font('Inter', 32px, 600);
    line-height: 39px;
    letter-spacing: -0.013em;
    margin-top: 41px;
    color: $text-color--white-primary;

    br {
      display: none;
    }
  }

  @media screen and (max-width: 1120px) {
    padding-top: 48px;
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 56px;
      line-height: 48px;
    }
    &__subtitle {
      margin-top: 8px;
      font-size: 21px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 430px) {
    &__title {
      font-size: 48px;
      line-height: 130%;
      margin-bottom: 36px;
    }

    &__subtitle {
      letter-spacing: -1px;

      br {
        display: block;
      }
    }
  }
}
</style>

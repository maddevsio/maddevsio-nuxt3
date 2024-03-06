<script setup lang="ts">
const sectionText = ref<HTMLElement>()
const { $getMediaFromS3 } = useMediaFromS3()
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
</script>
<template>
  <section
    id="transparent-header-area"
    class="our-philosophy-banner"
  >
    <picture>
      <source
        :srcset="[$getMediaFromS3('/images/OurPhilosophy/webp/banner-philosophy.webp') + ' ', $getMediaFromS3('/images/OurPhilosophy/webp/banner-philosophy@2x.webp 2x')]"
        type="image/webp"
        class="our-philosophy-banner__image"
      >
      <img
        :srcset="$getMediaFromS3('/images/OurPhilosophy/png/banner-philosophy@2x.png')"
        :src="$getMediaFromS3('/images/OurPhilosophy/png/banner-philosophy.png')"
        width="1680"
        height="827"
        class="our-philosophy-banner__image"
        alt="Team"
      >
    </picture>
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

  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    object-position: top;
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

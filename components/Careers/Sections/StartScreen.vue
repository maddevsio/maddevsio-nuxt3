<script setup lang="ts">
const sectionText = ref<HTMLElement | null>(null)
const { sectionTextOpacity } = useChangeTextOpacity(sectionText)
const { isMobile } = useCheckMobile(680)
const sourcePaths = {
  desktop: '/images/Careers/webp/office-black.webp',
  laptop: '/images/Careers/webp/office-black-laptop.webp',
  tablet: '/images/Careers/webp/office-black-tablet.webp',
  mobile: '/images/Careers/webp/office-black-mobile.webp',
}
</script>
<template>
  <div
    id="transparent-header-area"
    class="careers-banner"
  >
    <SharedUIAdaptiveImage
      :source-paths="sourcePaths"
      :width="isMobile ? 414 : 1920"
      :height="isMobile ? 844 : 915"
      :alt="'Office'"
      class="careers-banner__image"
    />
    <div
      ref="sectionText"
      class="container"
      :style="{opacity: sectionTextOpacity}"
    >
      <h1 class="careers-banner_title">
        Career at Mad Devs
      </h1>
      <p class="careers-banner_description">
        Without empty words, here at Mad Devs we partner with projects where our teams thrive.
        Innovating solutions, carrying ownership, delivering sustainable value and celebrating successes — make a happy
        workplace, where things get done.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.careers-banner {
  position: relative;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213 100%);
  overflow: hidden;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  :deep(.image-background) {
    position: absolute;
    top: 0;
    left: 0;
    object-position: top;
    z-index: -1;
    opacity: 0.48;
  }

  &_title,
  &_description {
    text-align: center;
  }

  &_title {
    margin-bottom: 56px;
    @include font('Inter', 100px, 900);
    letter-spacing: -0.04em;
    line-height: 96px;
    color: $text-color--white;

    @media screen and (max-width: 991px) {
      margin-top: 70px;
    }
  }

  &_btn {
    padding: 12px 24px;
    background: $bgcolor--white-primary;
    box-sizing: border-box;
    border-radius: 4px;
    color: $text-color--black-oil;
    border: none;
    @include font('Inter', 16px, 400);
    letter-spacing: -0.013em;
    cursor: pointer;

    img {
      width: 18px;
      margin-right: 10px;
    }

    &:active {
      background-color: $bgcolor--gainsboro;
    }
  }

  &_img {
    width: 100%;
    height: 100%;
  }

  &_description {
    max-width: 1028px;
    margin: 0 auto;
    @include font('Inter', 32px, 400);
    line-height: 44px;
    letter-spacing: -0.013em;
    color: $text-color--cultured;
    margin-bottom: 56px;

    span {
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 98px;

    &_title {
      margin-bottom: 26px;
      font-size: 76px;
      line-height: 76px;
    }

    &_description {
      font-size: 24px;
      line-height: 31px;
    }
  }

  @media screen and (max-width: 620px) {
    margin-bottom: 108px;

    &_title {
      max-width: 250px;
      margin-bottom: 34px;
      font-size: 48px;
      line-height: 49px;
    }

    &_description {
      margin-bottom: 65px;
    }
  }
}
</style>

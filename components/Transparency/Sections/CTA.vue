<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
const ctaBannerData = {
  primary: {
    title: 'Get started with Mad Devs',
    titleTag: 'h2',
    description: 'Do you see a promising collaboration? Let’s discuss how Mad Devs can help you!',
    showButton: true,
    buttonText: 'Contact us',
    backgroundImage: {
      url: $getMediaFromS3('images/transparency/webp/cta-background.webp'),
      alt: 'Get started with Mad Devs',
      dimensions: {
        width: 1240,
        height: 340,
      },
    },

    backgroundColor: 'white',
    enableImageOverlay: false,
    linkToPage: {
      url: '',
    },
  },
}
</script>
<template>
  <LazyPageBlocksCtaBannerWithBackgroundImage
    :slice="ctaBannerData"
    class="transparency-cta"
  />
</template>
<style scoped lang="scss">
.transparency-cta {
  padding-top: 128px;
  background: #fff;

  :deep(.cta-banner-slice-with-background-image__title),
  :deep(.cta-banner-slice-with-background-image__description) {
    color: $text-color--chinese-black;
  }

  :deep(.cta-banner-slice-with-background-image__description) {
    font-weight: 600;
  }

  :deep(.cta-banner-slice-with-background-image__container) {
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0.1%, rgba(255, 255, 255, 0.60) 14.67%, rgba(255, 255, 255, 0.60) 88.25%, rgba(255, 255, 255, 0.00) 99.89%);
      filter: blur(2px);
      z-index: 1;
    }
  }

  @media screen and (max-width: 1280px), screen and (max-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    padding-top: 72px;
  }

  @media screen and (max-width: 1026px) {
    padding-top: 48px;

    :deep(.cta-banner-slice-with-background-image__image) {
      opacity: 0.5;
    }

    :deep(.container) {
      padding-inline: 77px;
    }
  }

  @media screen and (max-width: 768px) {
    :deep(.container) {
      padding-inline: 56px;
    }
  }

  @media screen and (max-width: 576px) {
    :deep(.container) {
      padding-inline: 24px;
    }
  }
}
</style>

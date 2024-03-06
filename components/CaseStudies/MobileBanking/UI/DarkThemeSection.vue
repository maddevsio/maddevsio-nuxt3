<script setup lang="ts">
import { darkThemeData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="dark-theme m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="darkThemeData"
      :main-title-tag="'h3'"
    />
    <div class="dark-theme-section__image-wrapper background-color-black-primary-bg">
      <div class="container_middle dark-theme-section__container">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1161"
          :height="649"
          folder="mobile-banking"
          file="black-theme-mobiles"
          extension="png"
          alt="Dark Theme"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dark-theme-section {
  &__container {
    max-width: 1164px;
  }

  &__image-wrapper {
    position: relative;
    padding: 93px 0 41px;
    &::after {
      content: '';
      width: 100%;
      height: 320px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(0deg, #101113 32.51%, rgba(16, 17, 19, 0) 100%);
    }

    @media screen and (max-width: 930px) {
      &::after {
        height: 250px;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 48px 0 41px;
    }

    @media screen and (max-width: 500px) {
      &::after {
        height: 190px;
      }
    }
  }

}
</style>

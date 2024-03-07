<script setup lang="ts">
import { storiesUserActionsData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="stories m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="storiesUserActionsData"
      :main-title-tag="'h3'"
    />
    <div class="stories__image-wrapper background-color-silver">
      <div class="container_regular">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="845"
          :height="630"
          folder="mobile-banking"
          file="stories-user-actions"
          extension="png"
          alt="Stories on User Actions"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.stories {
  &__image-wrapper {
    position: relative;
    padding: 78px 0 41px;
    &::after {
      content: '';
      width: 100%;
      height: 320px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(0deg, #F5F7F9 32.51%, rgba(245, 247, 249, 0) 100%);
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

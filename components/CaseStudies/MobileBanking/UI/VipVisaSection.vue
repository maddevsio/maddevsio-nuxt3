<script setup lang="ts">
import { vipVisaData } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <div class="vip-visa m-96_bottom media-m-48_bottom">
    <LazyCaseStudiesMobileBankingUIChallengeSection
      v-bind="vipVisaData"
      :main-title-tag="'h3'"
    />
    <div class="vip-visa__image-wrapper background-color-silver">
      <div class="container_regular vip-visa__image-container">
        <LazyCaseStudiesUIPicture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="674"
          :height="609"
          folder="mobile-banking"
          file="two-phones"
          extension="png"
          alt="VIP Visa"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vip-visa {
  &__image-wrapper {
    padding: 96px 0;
  }
  &__image-container {
    max-width: 674px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    &__image-wrapper {
      padding: 48px 0;
    }

    &__image-container {
      padding: 0 65px;
    }
  }
}
</style>

<script setup lang="ts">
import { bandPayAppCards } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="m-48_bottom media-m-24_bottom">
    <div class="container_regular m-24_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        BandPay app architecture
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        When building mobile apps for the BandPay project, we first released the versions for internal testing.
        Once the successful test results were achieved, we released the apps to production. Both iOS and Android
        applications have similar architectures, which include the following components:
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIParallaxCards
        :data-cards="bandPayAppCards"
        class="m-48_bottom media-m-24_bottom"
      />
      <h4 class="case_title_h5">
        Below are the integrations of the iOS and Android apps.
      </h4>
    </div>
    <div class="container_full background-color-silver p-48_top p-48_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie"
          height="326px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bandpay/lottie/bandpay-app.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
:deep(.parallax-title) {
  font-size: 17px;
}
</style>

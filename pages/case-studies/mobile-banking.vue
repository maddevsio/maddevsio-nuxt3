<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'
import {
  mobileBankingHeaderOverlayBackground,
  mobileBankingVideoLinks,
} from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'

const caseStudyData = await useCaseStudyData({
  caseName: 'mobile-banking',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case-mobile-banking">
    <LazyCaseStudiesUIStartScreen
      project="mobile-banking"
      :video-path="mobileBankingVideoLinks.videoPath"
      :video-poster-path="mobileBankingVideoLinks.fallbackPath"
      :pseudo-before-background="mobileBankingHeaderOverlayBackground"
    >
      <template #title>
        <h1
          class="case-header__title"
        >
          Mobile Banking for 2M+ Users
        </h1>
      </template>
      <template #description>
        <p
          class="case-header__description"
        >
          Mad Devs, in partnership with one of the largest banks in Kazakhstan, developed a mobile banking application
          with advanced functionality and an excellent user experience. Now users can completely skip going to the
          bank and immediately get plenty of various services and additional products.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreen>
    <LazyCaseStudiesMobileBankingMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/bandpay/"
      class-name="bandpay"
    >
      <template #icon>
        <img
          :src="$getMediaFromS3(`images/core/Studies/svg/bandpay-footer.svg`)"
          width="283"
          height="90"
          alt="BandPay"
          loading="lazy"
          class="case_logotype-bandpay"
        >
      </template>
      BandPay: A tool to run business
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/yourcast/styles';
@import '../../assets/styles/cases/media';

.case-mobile-banking {
  & .case_footer {
    padding-top: 45px !important;
    padding-bottom: 75px !important;
  }

  & .case_title {
    font-size: 48px;
    line-height: 130%;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      font-size: 21.25px;
      line-height: 130%;
      margin-bottom: 32px;
      max-width: 254px;
    }
  }
}

.case_logotype-bandpay {
  width: 283px;
  height: 90px;
  margin-bottom: 45px;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
    width: 180px;
    height: auto;
  }
}
</style>

<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'bandpay',
  defaultOgImage: 'https://maddevs.io/sjmc-case.png',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 383,
  height: 114,
  folder: 'bandpay',
  file: 'bandpay-logo-white',
  alt: 'bandpay logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case_bandpay">
    <div class="case-bandpay__header-wrapper">
      <LazyCaseStudiesUIStartScreenOLD
        :logo="logo"
        project="bandpay"
        video-name="/videos/banner-bandpay.mp4"
        video-fallback-path="/images/Cases/bandpay/webp/bandpay-banner.webp"
      >
        <template #title>
          BandPay: A tool
          <br>
          to run business
        </template>
        <template #description>
          <p
            class="case_header-description case_bandpay__header-description"
          >
            Mad Devs created a complete B2B payment management solution
            <br>
            that enables freelancers to promote their business, make
            <br>
            agreements, and get paid quickly and securely.
          </p>
        </template>
      </LazyCaseStudiesUIStartScreenOLD>
    </div>
    <LazyCaseStudiesBandpayMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/guardrails/"
      class-name="guardrails"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/guardrails-footer.svg`)"
          width="230"
          height="113"
          alt="Guardrails"
          class="case_logotype-guardrails"
        >
      </template>
      Enhancing the GuardRails <br>
      solution
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import "../../assets/styles/cases/base";
@import "../../assets/styles/cases/components";
@import "../../assets/styles/cases/media";

.case {
  &_header-bandpay {
    &::before {
      height: 175px !important;
      background: linear-gradient(
          180deg,
          #000000 0%,
          rgba(0, 0, 0, 0.991353) 6.67%,
          rgba(0, 0, 0, 0.96449) 13.33%,
          rgba(0, 0, 0, 0.91834) 20%,
          rgba(0, 0, 0, 0.852589) 26.67%,
          rgba(0, 0, 0, 0.768225) 33.33%,
          rgba(0, 0, 0, 0.668116) 40%,
          rgba(0, 0, 0, 0.557309) 46.67%,
          rgba(0, 0, 0, 0.442691) 53.33%,
          rgba(0, 0, 0, 0.331884) 60%,
          rgba(0, 0, 0, 0.231775) 66.67%,
          rgba(0, 0, 0, 0.147411) 73.33%,
          rgba(0, 0, 0, 0.0816599) 80%,
          rgba(0, 0, 0, 0.03551) 86.67%,
          rgba(0, 0, 0, 0.0086472) 93.33%,
          rgba(0, 0, 0, 0) 100%
      );
      opacity: 0.3;
    }
  }

  &_bandpay-logo-white {
    width: 383px;
    height: 114px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 217px;
      height: 138px;
    }
  }
}

.case_bandpay {
  & section.case_footer::before {
    background-color: transparent;
  }
  & h1.case_header-title {
    width: 700px;
    margin-bottom: 16px;
    color: $text-color--white-primary;
    @media screen and (max-width: 655px) {
      margin-bottom: 0;
      width: 320px;
    }
    @media screen and (max-width: 370px) {
      width: 250px;
    }
  }
  & .case_bandpay__header-description {
    color: $text-color--white-primary;
  }
}

.case_logotype-guardrails {
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 87.35px;
  }
}
</style>

<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'lido',
  defaultOgImage: 'https://maddevs.io/sjmc-case.png',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 286,
  height: 70,
  folder: 'lido',
  file: 'lido-logo',
  alt: 'Lido logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case_lido">
    <div class="case-lido__header-wrapper">
      <LazyCaseStudiesUIStartScreenOLD
        :logo="logo"
        project="lido"
        video-name="/videos/lido-banner.mp4"
        video-fallback-path="/images/Cases/lido/webp/lido-banner.webp"
      >
        <template #title>
          Lido: decentralized
          <br>
          staking platform
        </template>
        <template #description>
          <p
            class="case_header-description case_lido__header-description"
          >
            Mad Devs assisted Lido - a liquid staking solution - to improve their
            <br>
            product and simplify and secure staking for your digital assets.
          </p>
        </template>
      </LazyCaseStudiesUIStartScreenOLD>
    </div>
    <LazyCaseStudiesLidoMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/rocifi/"
      class-name="rocifi"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/rocifi-black-footer.svg`)"
          width="294"
          height="88"
          alt="rocifi"
          class="case_logotype-rocifi"
        >
      </template>
      RociFi: Under-Collateralized Credit Protocol on Polygon.
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-lido {
    background: linear-gradient(180deg, rgba(0, 162, 254, 0.6) 0%, rgba(83, 211, 224, 0.6) 100%);
    &::before {
      height: 175px !important;
      background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.991353) 6.67%,
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
        rgba(0, 0, 0, 0) 100%);
      opacity: 0.3;
    }
  }

  &_lido-logo {
    width: 286px;
    height: 70px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 176px;
      height: 43px;
    }
  }
}

.case_lido {
  & .case_header-content {
    padding-left: 65px;

    @media screen and (max-width: 1170px) {
      padding-left: 0;
    }
  }

  .case_header-title {
    width: 815px !important;
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

  & .case_lido__header-description {
    color: $text-color--white-primary;
  }

  & .case_footer {
    padding-top: 46px;

    & .case_title {
      margin: 58px 0 32px 0;
    }
  }
}

.case_logotype-bandpay {
  margin-bottom: 46px;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 87.35px;
  }
}
</style>

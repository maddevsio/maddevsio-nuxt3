<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'rocifi',
  defaultOgImage: 'https://maddevs.io/rocifi-meta-banner.png',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 197.47,
  height: 163.26,
  folder: 'rocifi',
  file: 'rocifi-logo',
  alt: 'Rocifi logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case-rocifi">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="rocifi"
      video-name="/videos/rocifi-banner.mp4"
      video-fallback-path="/images/Cases/rocifi/webp/rocifi-banner-without-logo.webp"
    >
      <template #title>
        RociFi: Under- <br>
        Collateralized Credit <br>
        Protocol on Polygon
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          How Mad Devs assisted
          <a
            href="https://roci.fi/"
            target="_blank"
            rel="noopener"
            class="case-rocifi__link"
          >
            RociFi
          </a> in developing and launching DeFi's under-collateralized <br>
          credit protocol on the Polygon network to reshape the loan experience.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesRocifiMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/lido/"
      class-name="lido"
    >
      <template #icon>
        <img
          :src="$getMediaFromS3(`images/core/Studies/svg/lido-footer-logo.svg`)"
          width="272"
          height="66"
          alt="Lido"
          loading="lazy"
          class="case_logotype-lido"
        >
      </template>
      Lido: decentralized <br> staking platform
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/yourcast/styles';
@import '../../assets/styles/cases/media';

.case-rocifi {
  & .case_header-rocifi {
    &::before {
      background: #2D0C50;
      opacity: 0.1;
    }

    @media screen and (max-width: 1170px) and (max-height: 600px) {
      padding-top: 90px;
    }

    @media screen and (max-width: 1170px) and (max-height: 350px) {
      padding-top: 70px;
    }

    @media screen and (max-width: 375px) and (max-height: 600px) {
      padding-top: 80px;
    }

    @media screen and (max-width: 713px) {
      & .case_header-title {
        font-size: 35px;
        line-height: 130%;
      }
    }
  }

  &__link {
    color: #B36EFD;
  }

  & .case_header-content {
    column-gap: 196px;
  }

  & .case_rocifi-logo {
    width: 197.47px;
    height: 163.26px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
      width: 104.07px;
      height: 86.04px;
    }
  }

  & .case_footer {
    padding: 57px 0 75px;
  }

  & .case_title-lido {
    font-size: 48px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -2px;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    margin: 58px 0 32px;

    br {
      display: none;
    }

    @media screen and (max-width: 768px) {
      font-size: 21.25px;
      letter-spacing: -0.02em;
      margin: 41px 0 32px;

      br {
        display: block;
      }
    }
  }

  & .case_logotype-lido {
    @media screen and (max-width: 768px) {
      width: 180px;
      height: 42.21px;
    }
  }
}
</style>

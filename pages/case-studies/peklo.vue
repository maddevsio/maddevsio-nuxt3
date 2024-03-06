<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'peklo',
  defaultOgImage: 'https://maddevs.io/sjmc-case.png',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 206.34,
  height: 149.71,
  folder: 'peklo',
  file: 'peklo-logo',
  alt: 'Peklo Tool for search ad campaigns',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--peklo">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="peklo"
      video-name="/videos/peklo-banner.mp4"
      video-fallback-path="/images/Cases/peklo/webp/peklo-banner.webp"
    >
      <template #title>
        Peklo Tool for better <br> ad campaigns
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Mad Devs developed parsing- and clusterisation-based software that <br> automates keyword grouping and text generation, making the launch <br> of contextual ads two times faster.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesPekloMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/R4TCA-web-application/"
      class-name="itc"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/itc.svg`)"
          width="195"
          height="72"
          alt="Ready4Trade Central Asiao"
          class="case_logotype-itc"
        >
      </template>
      Ready4Trade Central Asia
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/_base';
@import '../../assets/styles/cases/_components';
@import '../../assets/styles/cases/_media';

.case {
  &_header-peklo {
    background-color: rgba(16, 17, 19, 0.9);
  }

  &_header-title {
    @media screen and (max-width: 768px) {
      br {
        display: none;
      }
    }
  }

  &_peklo-logo {
    width: 206.34px;
    height: 149.71px;
    margin-left: 170px;

    @media screen and (max-width: 1320px) {
      margin-left: 70px;
    }

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 655px) {
      width: 137.86px;
      height: 99.25px;
    }
  }

  &_logotype-itc {
    width: 210px;
    height: 90px;
    margin-bottom: 30px;
  }

  &_title-itc {
    margin-bottom: 51px;

    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-itc {
      width: 135px;
      height: 55px;
      margin-bottom: 21px;
    }

    &_title-itc {
      margin-bottom: 31px;
    }
  }
}
</style>

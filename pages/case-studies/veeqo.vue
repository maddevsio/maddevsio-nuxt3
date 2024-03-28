<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'veeqo',
  defaultOgImage: 'https://maddevs.io/veeqo-case.jpg',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 309,
  height: 114,
  folder: 'veeqo',
  file: 'veeqo-logotype',
  alt: 'Veeqo an Inventory Management Platform’s Logo.',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--veeqo">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="veeqo"
      video-name="/videos/veeqo-banner.mp4"
      video-fallback-path="/images/Cases/veeqo/svg/veeqo-banner-bg.svg"
    >
      <template #title>
        Optimization <br> for Veeqo
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Our DevOps team optimized the infrastructure for Veeqo, an inventory <br> and shipping <span class="case_nowrap">e-commerce</span> platform, and made it highly efficient, smooth, <br> and cost-effective for our partners.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesVeeqoMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/yourcast/"
      class-name="yourcast"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/yourcast-logo.svg`)"
          width="270"
          height="57"
          alt="The Evolution of Yourcast.TV"
          class="case_logotype-yourcast"
        >
      </template>
      The Evolution of Yourcast.TV
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-veeqo {
    background-color: rgba(16, 17, 19, 0.5);
  }

  &_veeqo-logotype {
    width: 309px;
    height: 114px;
    margin-left: 114px;

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 655px) {
      width: 219px;
      height: 90px;
    }

    @media screen and (max-width: 370px) {
      width: 190px;
      height: 70px;
      margin-bottom: 20px;
    }
  }

  &_nowrap {
    white-space: nowrap;
  }

  &_logotype-yourcast {
    width: 270px;
    height: 57px;
    margin-bottom: 30px;
  }

  &_title-yourcast {
    margin-bottom: 51px;

    @media screen and (max-width: 430px) {
      max-width: 205px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-yourcast {
      width: 200px;
      height: 44px;
      margin-bottom: 25px;
    }

    &_title-yourcast {
      margin-bottom: 41px;
    }
  }
}
</style>

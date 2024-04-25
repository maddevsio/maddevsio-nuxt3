<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'r4tca-web-application',
  defaultOgImage: 'https://maddevs.io/itc-case.jpg',
})

if (caseStudyData.value?.caseStudyMeta.schemaOrg) {
  useJsonld(() => caseStudyData.value?.caseStudyMeta.schemaOrg.map((snippet: { type: string, innerHTML: string }) => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}))

const logo = {
  width: 377,
  height: 154.95,
  folder: 'itc',
  file: 'itc-logo',
  alt: 'International trade center logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--itc">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="itc"
      video-name="/videos/itc-banner.mp4"
      video-fallback-path="/images/Cases/itc/webp/itc-banner.webp"
    >
      <template #title>
        Ready4Trade <br> Central Asia
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          A web app customized for the delivery of export management coaching <br> missions that contributes to the development of <span class="case_nowrap">intra-regional</span> <br> and international trade in Central Asia.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesR4TCAMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/veeqo/"
      class-name="veeqo"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/veeqo.svg`)"
          width="195"
          height="72"
          alt="Optimization for Veeqo"
          class="case_logotype-veeqo"
        >
      </template>
      Optimization for Veeqo
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/_base';
@import '../../assets/styles/cases/_components';
@import '../../assets/styles/cases/_media';

.case {
  &_header-itc {
    background-color: rgba(16, 17, 19, 0.5);
  }

  &_itc-logo {
    width: 377px;
    height: 154.95px;
    margin-left: 127px;
    margin-bottom: 32px;

    @media screen and (max-width: 1320px) {
      margin-left: 70px;
    }

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 655px) {
      width: 192px;
      height: 78.97px;
    }
  }

  &_nowrap {
    white-space: nowrap;
  }

  &_logotype-veeqo {
    width: 195px;
    height: 72px;
    margin-bottom: 30px;
  }

  &_title-veeqo {
    margin-bottom: 51px;

    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-veeqo {
      width: 120px;
      height: 44px;
      margin-bottom: 21px;
    }

    &_title-veeqo {
      margin-bottom: 31px;
    }
  }
}
</style>

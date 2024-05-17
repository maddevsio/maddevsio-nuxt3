<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'citycam',
  defaultOgImage: 'https://maddevs.io/citycam.png',
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
  width: 253,
  height: 93,
  folder: 'citycam',
  file: 'citycam-logo',
  alt: 'CityCam intersection monitoring system',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--citycam">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="citycam"
      video-name="/videos/banner-citycam.mp4"
      video-fallback-path="/images/Cases/citycam/webp/banner-citycam.webp"
    >
      <template #title>
        Better cities <br> with CityCam
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Building hardware and software for energy-efficient <br> and highly autonomous traffic cameras
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesCitycamMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/peklo/"
      class-name="peklo"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/peklo-footer.svg`)"
          width="195"
          height="72"
          alt="Peklo Tool for search ad campaigns"
          class="case_logotype-peklo"
        >
      </template>
      Peklo Tool for better
      ad campaigns
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-citycam {
    background-color: rgba(16, 17, 19, 0.4);

    &::before {
      background: linear-gradient(90deg, #000836 0%, rgba(0, 24, 155, 0.83) 99.13%);
      opacity: 0.8;
    }
  }

  &_header-title {
    width:735px;
    margin-bottom: 28px;
    @media screen and (max-width: 1320px) {
      width:650px;
    }
    @media screen and (max-width: 655px) {
      margin-bottom: 0;
      width:327px;
      br {
        display: none;
      }
    }
  }

  &_citycam-logo {
    width: 253px;
    height: 93px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 30px;
    }

    @media screen and (max-width: 655px) {
      margin-top:0;
      width: 193px;
      height: 71px;
    }
  }

  &_logotype-peklo {
    width: 210px;
    height: 90px;
    margin-bottom: 30px;
  }

  &_title-peklo {
    margin-bottom: 51px;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-peklo {
      width: 180px;
      height: 65px;
    }

    &_title-peklo {
      margin-bottom: 31px;
    }
  }
}
</style>

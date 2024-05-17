<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'clutch',
  defaultOgImage: 'https://maddevs.io/clutch-meta-banner.webp',
})

const logo = {
  width: 218,
  height: 63,
  folder: 'clutch',
  file: 'clutch-logo',
  alt: 'A platform of client reviews and content',
}

const { $getMediaFromS3 } = useMediaFromS3()

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
</script>

<template>
  <div class="case case--clutch">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="clutch"
      video-name="/videos/clutch-banner.mp4"
      video-fallback-path="/images/Cases/clutch/webp/clutch-banner.webp"
    >
      <template #title>
        The growth <br> of Clutch.co
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Helping a successful data-driven B2B platform smoothly adapt to increasing <br>
          loads and numbers of users through cutting-edge technological solutions
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesClutchMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/citycam/"
      class-name="citycam"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/citycam-footer.svg`)"
          width="195"
          height="72"
          alt="Better cities with CityCam"
          class="case_logotype-citycam"
        >
      </template>
      Better cities with CityCam
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/cases/base';
@import '@/assets/styles/cases/components';
@import '@/assets/styles/cases/media';

.case {
  &_header-clutch {
    background-color: rgba(8, 83, 126, 0.9);
  }

  &_header {
    &-title {
      width: 700px;
      margin-bottom: 16px;
      @media screen and (max-width: 655px) {
        margin-bottom: 0;
        width: 320px;
      }
      @media screen and (max-width: 370px) {
        width: 250px;
      }
    }
  }

  &_clutch-logo {
    width: 218px;
    height: 63px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 185px;
      height: 53px;
    }
  }

  &_logotype-citycam {
    width: 210px;
    height: 90px;
    margin-bottom: 30px;
  }

  &_title-citycam {
    margin-bottom: 51px;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-citycam {
      width: 180px;
      height: 65px;
    }

    &_title-citycam {
      margin-bottom: 31px;
    }
  }
}
</style>

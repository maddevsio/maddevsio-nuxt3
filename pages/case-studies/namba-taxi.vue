<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'namba-taxi',
  defaultOgImage: 'https://maddevs.io/namba-taxi.png',
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
  width: 218,
  height: 63,
  folder: 'nambataxi',
  file: 'nambataxi',
  alt: 'Namba Taxi',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--nambaTaxi">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="namba-taxi"
      video-name="/videos/namba-taxi-banner.mp4"
      video-fallback-path="/images/Cases/nambataxi/webp/nambataxi-banner.webp"
    >
      <template #title>
        Namba Taxi: <br> Modernising <br> transport
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          The system that took urban transport in Bishkek, Kyrgyzstan to the <br> next level in 2013 by making taxi ordering
          fast, efficient and <br> convenient and continues to function today.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesNambaTaxiMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/clutch/"
      class-name="clutch"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/clutch-footer.svg`)"
          width="312"
          height="138"
          alt="Clutch"
          class="case_logotype-clutch"
        >
      </template>
      The growth of Clutch.co
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/_base';
@import '../../assets/styles/cases/_components';
@import '../../assets/styles/cases/_media';

.case {
  &_header-namba-taxi {
    background-color: rgba(0, 174, 239, 0.4);
  }

  &--nambaTaxi {
    & h1.case_header-title {
      width: 700px;
      margin-bottom: 20px;
      @media screen and (max-width: 655px) {
        margin-bottom: 0;
        width: 320px;
      }
      @media screen and (max-width: 370px) {
        width: 250px;
      }
    }
  }

  &_nambataxi {
    width: 310px;
    height: 45px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 655px) {
      margin-bottom: 50px;
      width: 185px;
      height: 30px;
    }
    @media screen and (max-width: 370px) {
      margin-bottom: 80px;
    }
  }

  &_logotype-clutch {
    width: 312px;
    height: 138px;
    margin-bottom: 5px;
  }

  &_title-clutch {
    margin-bottom: 25px;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-clutch {
      width: 180px;
      height: 80px;
    }

    &_title-clutch {
      margin-bottom: 31px;
    }
  }
}
</style>

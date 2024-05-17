<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'guardrails',
  defaultOgImage: 'https://maddevs.io/guardrails-meta-banner.png',
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
  height: 300,
  folder: 'guardrails',
  file: 'guardrails-logo',
  alt: 'GUARDRAILS',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--guardrails">
    <div class="case-guardrails__header-wrapper">
      <LazyCaseStudiesUIStartScreenOLD
        :logo="logo"
        project="guardrails"
        video-name="/videos/guardrails-banner.mp4"
        video-fallback-path="/images/Cases/guardrails/webp/guardrails-banner.webp"
      >
        <template #title>
          Enhancing the GuardRails solution
        </template>
        <template #description>
          <p
            class="case_header-description"
          >
            Mad Devs assisted GuardRails an application security platform
            <br>
            to advance their product and increase its business value.
          </p>
        </template>
      </LazyCaseStudiesUIStartScreenOLD>
    </div>
    <LazyCaseStudiesGuardrailsMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/clutch/"
      class-name="guardrails-footer clutch"
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
      <span class="m-96_bottom">
        The growth of Clutch.co
      </span>
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &-guardrails__header-wrapper {
    background-color: rgba(50, 58, 69, 0.6);
  }
  &_title-guardrails-footer{
    margin-bottom: 48px;
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

  &_guardrails-logo {
    width: 218px;
    height: 300px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 217px;
      height: 138px;
    }
  }

}
</style>

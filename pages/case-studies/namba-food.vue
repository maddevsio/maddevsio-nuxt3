<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'namba-food',
  defaultOgImage: 'https://maddevs.io/namba-food.png',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 259,
  height: 82,
  folder: 'nambafood',
  file: 'nambafood-logo',
  alt: 'Nambafood Logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="main case case--nambafood">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="nambafood"
      video-name="/videos/main.ef19480.mp4"
      video-fallback-path="/images/Cases/nambafood/webp/nambafood-poster.webp"
    >
      <template #title>
        Namba Food
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Mad Devs created the Namba Food delivery service from scratch. The solution <br>
          orchestrates feature-rich apps for couriers, end-users, and business owners.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesNambaFoodMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/sir-john-monash-centre/"
      class-name="sjmc"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/sjmc-footer.svg`)"
          width="253"
          height="113"
          alt="SJMC"
          class="case_logotype-sjmc"
        >
      </template>
      The maintenance of memory: <br>
      Sir John Monash Centre
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/nambafood/styles';
@import '../../assets/styles/cases/media';
</style>

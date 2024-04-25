<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'godee',
  defaultOgImage: 'https://maddevs.io/godee.png',
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
  width: 293,
  height: 130,
  folder: 'godee',
  file: 'godee-logo',
  alt: 'Godee Logo',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--godee">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="godee"
      video-name="/videos/godee-case-main-video.mp4"
      video-fallback-path="/images/Cases/godee/webp/godee-poster.webp"
    >
      <template #title>
        Convenient shuttle <br>
        bus service
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Mad Devs helped GoDee with developing feature-rich software to re-invent <br>
          public mobility by building new smart ways of a daily commute.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesGodeeMain />
    <LazyCaseStudiesUIFooter
      link="/case-studies/namba-food/"
      class-name="namba-food"
    >
      <template #icon>
        <img
          loading="lazy"
          :src="$getMediaFromS3(`images/core/Studies/svg/nambafood-footer.svg`)"
          width="200"
          height="63"
          alt="Namba Food"
          class="case_logotype-namba-food"
        >
      </template>
      Namba Food <br>
      Top Delivery Service in
      Central Asia
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/godee/styles';
@import '../../assets/styles/cases/media';
</style>

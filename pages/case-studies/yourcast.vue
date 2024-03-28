<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'yourcast',
  defaultOgImage: 'https://maddevs.io/yourcast.jpg',
})

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg] : []))

const logo = {
  width: 387,
  height: 81.23,
  folder: 'yourcast',
  file: 'yourcast-logo',
  alt: 'YourcastTV - Video Streaming Platform Logo.',
}

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <div class="case case--yourcast">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="yourcast"
      video-name="/videos/banner-yourcast.mp4"
      video-fallback-path="/images/Cases/yourcast/webp/banner-yourcast.webp"
    >
      <template #title>
        The Evolution <br>
        of Yourcast.TV
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          Mad Devs developed a secure and private video streaming service and live <br>
          video broadcasting cinema to provide entertainment experience to isolated <br>
          groups feeling homesick.
        </p>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesYourcastMain />
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
      The maintenance <br class="case_mobile-break-sjmc">
      of memory: <br>
      Sir John Monash <br class="case_mobile-break-sjmc">
      Centre
    </LazyCaseStudiesUIFooter>
  </div>
</template>
<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/yourcast/styles';
@import '../../assets/styles/cases/media';
</style>

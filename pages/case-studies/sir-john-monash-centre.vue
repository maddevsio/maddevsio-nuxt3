<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const caseStudyData = await useCaseStudyData({
  caseName: 'sir-john-monash-centre',
  defaultOgImage: 'https://maddevs.io/sjmc-case.png',
})

const scripts = [{
  src: 'https://cdn.jsdelivr.net/npm/fullscreen-api-polyfill@1.1.2/fullscreen-api-polyfill.min.js',
  body: true,
  defer: true,
}]

// @ts-ignore
useHead(buildHead({
  ...caseStudyData.value?.caseStudyMeta,
  // @ts-ignore
}, Array.isArray(caseStudyData.value?.caseStudyMeta.schemaOrg) ? [...caseStudyData.value!.caseStudyMeta.schemaOrg, ...scripts] : [...scripts]))

const logo = {
  width: 242,
  height: 110,
  folder: 'sjmc',
  file: 'sjmc-logo',
  alt: 'Sjmc Logo',
}

const { $eventBus } = useNuxtApp()
const { $getMediaFromS3 } = useMediaFromS3()

const openFullscreen = () => {
  $eventBus.$emit('open-fullscreen')
}
</script>

<template>
  <div class="case case--sjmc">
    <LazyCaseStudiesUIStartScreenOLD
      :logo="logo"
      project="sjmc"
      video-name="/videos/sjmc/sjmc-main-video.b35a387.mp4"
      video-fallback-path="/images/Cases/sjmc/webp/sjmc-poster.webp"
    >
      <template #title>
        Sir John Monash <br>
        Centre
      </template>
      <template #description>
        <p
          class="case_header-description"
        >
          The Sir John Monash Centre (SJMC) tells Australia’s story of the Western Front <br>
          during the First World War in the words of those who served.
        </p>
      </template>
      <template #actions>
        <button
          class="case_play-button"
          data-testid="test-play-button"
          type="button"
          @click="openFullscreen()"
        >
          <img
            :src="$getMediaFromS3(`images/core/Studies/svg/play-icon.svg`)"
            width="14"
            height="14"
            alt="Play"
            class="case_play-icon"
          >
          View video about SJMC
        </button>
      </template>
    </LazyCaseStudiesUIStartScreenOLD>
    <LazyCaseStudiesSJMCUIVideo />
    <LazyCaseStudiesSJMCMain />
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
@import '../../assets/styles/cases/sir-john-monash-centre/styles';
@import '../../assets/styles/cases/media';
</style>

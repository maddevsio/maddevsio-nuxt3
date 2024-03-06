<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_phase-online-cinema">
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Phase 1: Online cinema
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        Initially, it was decided to create a movie library with previews, duration information, etc. Purchasing videos
        was the easiest part. Pulling a good description for each movie from an external source eliminated the routine
        work related to content management. To address this issue.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div
      class="container_full background-color-silver"
    >
      <div class="container_regular">
        <LazySharedLottieMad
          id="online-cinema"
          class="case_lottie"
          height="753px"
          :lottie-link="$getMediaFromS3(`/images/Cases/yourcast/lottie/phase-online-cinema.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <LazyCaseStudiesUITextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
        Mad Devs integrated the platform with Plex Media Server, which provides free movie descriptions via an API.
      </LazyCaseStudiesUITextQuote>
      <h4 class="case_title_h3 m-12_bottom">
        TV shows & TV series
      </h4>
      <LazyCaseStudiesUITextParagraph class="m-96_bottom media-m-48_bottom">
        To support the rising demand for content, the platform needed to accommodate TV shows and series. Each
        TV series collection was split into seasons for better navigation. Viewers could track their progress; some
        series were marked as already watched, and the remaining were added to the suggested content. The
        viewer could mark episodes as watched, or the platform did it automatically for them.
      </LazyCaseStudiesUITextParagraph>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 467px;
    padding: 26px 0;
  }
}
</style>

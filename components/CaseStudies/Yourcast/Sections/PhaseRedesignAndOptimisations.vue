<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_redesign-and-optimisations">
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Phase 3: Redesign & optimisations
      </h3>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        To reduce traffic while re-streaming movies and TV series, Mad Devs used Nimble Streamer and Nimble Transcoder. As
        the source provided maximum quality, re-streaming of the ‘heavy’ content was overly expensive. To maintain high
        quality while reducing costs, files were split into data packages by Nimble Streamer and sent to the viewer’s
        browser.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        As all parts of the projects were developed independently during the first two phases, Mad Devs redesigned the
        platform infrastructure to orchestrate all of its services. The project became more organised and cost-effective,
        which was important for further growth.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver">
      <div class="container_regular">
        <LazySharedLottieMad
          id="redesign-and-optimisations"
          class="case_lottie"
          height="570px"
          :lottie-link="$getMediaFromS3(`/images/Cases/yourcast/lottie/phase-redesign-and-optimisations.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <LazyCaseStudiesUITextParagraph class="m-104_bottom media-m-48_bottom case_text-align-center case_lottie-description">
      Full Platform Architecture:
    </LazyCaseStudiesUITextParagraph>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 470px;
    padding-top: 68px;
    padding-bottom: 60px;

    @media screen and (max-width: 480px) {
      padding-top: 40px;
      padding-bottom: 34px;
    }
  }

  &_redesign-and-optimisations {
    :deep(.case_lottie-description.case_paragraph) {
      margin-top: 12px;
      font-size: 13px;
      line-height: 166%;
      letter-spacing: -0.02em;
      color: $text-color--grey-img-description;
    }
  }
}
</style>

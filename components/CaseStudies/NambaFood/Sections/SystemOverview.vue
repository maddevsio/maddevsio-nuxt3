<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top m-12_bottom media-m-48_top case_text-align-center">
        High-level system overview
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Namba Food is more than a delivery service website. With a partial vertical integration, it covers the entire
        cycle of ordering goods online. This means that an advanced set of software and hardware was required to
        maintain flawless work for all stakeholders, including end-users, couriers, team operators, and cafe and store
        managers.
      </LazyCaseStudiesUITextParagraph>
    </section>
    <section class="container_full background-color-silver">
      <div class="container_regular">
        <LazySharedLottieMad
          id="high-level-system-overview"
          class="case_lottie"
          height="671px"
          :lottie-link="$getMediaFromS3(`/images/Cases/nambafood/lottie/high-level-system-overview.json`)"
          :autoplay="true"
        />
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    padding: 55px 0;

    @media screen and (max-width: 768px) {
      padding: 35px 0;
    }
  }
}
</style>

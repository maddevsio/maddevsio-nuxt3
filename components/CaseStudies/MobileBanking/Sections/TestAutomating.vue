<script setup lang="ts">
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="test-automating m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h2 class="case_title_h2 m-12_bottom">
        Tests Automating
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        When we came to the project, there was only manual testing, which required a lot of time and effort.
        That is why the QA team mainly focused on the core functionality, so many bugs appeared only on production
        and often were unexpected.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextParagraph class="m-48_bottom media-m-24_bottom">
        Our goal was to expand the coverage by autotests, as well as help to choose the right AQAs
        and properly organize their work. The task consisted of several important points:
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="test-automating__lottie background-color-silver m-48_bottom media-m-24_bottom">
      <div class="container_middle">
        <LazySharedLottieMad
          class="test-automating__lottie-desktop"
          height="615px"
          :lottie-link="$getMediaFromS3(`/images/Cases/mobile-banking/lottie/test-automating-scheme.json`)"
          :autoplay="true"
        />
        <LazySharedLottieMad
          class="test-automating__lottie-tablet"
          height="1116"
          :lottie-link="$getMediaFromS3(`/images/Cases/mobile-banking/lottie/test-automating-mobile.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <LazyCaseStudiesMobileBankingUIResultsWithQuoteBox
        quote-text="We were very pleased with the new practices from Mad Devs because the process of testing and adding new
        test cases became much easier and faster. And the autotests Mad Devs wrote became the best instance
        for each our teams, which we are happy to follow."
        quote-author="Mobile Banking Product Owner"
        :title-tag="'h3'"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.test-automating {
  &__lottie {
    padding: 100px 0;

    &-tablet {
      display: none;
    }

    @media screen and (max-width: 768px) {
      padding: 0;

      &-desktop {
        display: none;
      }

      &-tablet {
        display: block;
      }
    }
  }
}
</style>

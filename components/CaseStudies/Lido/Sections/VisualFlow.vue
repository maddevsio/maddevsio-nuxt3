<script setup lang="ts">
import { testingProcessData } from '~/components/CaseStudies/Lido/constants/lidoConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-lido__visual-flow m-72_bottom media-m-48_bottom">
    <div class="container_regular m-24_bottom media-m-12_bottom">
      <h4 class="case-lido__visual-flow-title">
        Here’s visual flow:
      </h4>
    </div>
    <div class="container_full background-color-silver p-72_top p-56_bottom m-48_bottom media-p-32_top media-p-32_bottom media-m-24_bottom">
      <div class="container_regular">
        <LazySharedLottieMad
          class="case_lottie"
          height="603.24px"
          :lottie-link="$getMediaFromS3(`/images/Cases/lido/lottie/visual-flow.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <LazyCaseStudiesUITextParagraph class="m-24_bottom media-m-12_bottom">
        Also, 100% test coverage was a prerequisite, as well as a test that would pass the entire Smart Contract procedure.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIEmbedCard v-bind="testingProcessData" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.case-lido__visual-flow {
  &-title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    color: $text-color--black-oil;
  }
}
</style>

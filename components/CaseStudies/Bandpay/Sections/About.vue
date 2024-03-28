<script setup lang="ts">
import { statisticsBandPay } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'

useIntersectionObserver(
  ['statistics-about-1', 'statistics-about-2'],
  countUp,
)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="m-96_bottom media-m-48_bottom">
    <div class="container_regular m-48_top m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUITextParagraph>
        Many freelancers and small businesses have little knowledge of how to write contracts and arrange payments.
        Still, it is essential to guarantee that the work will be paid in full and on time.
        BandPay intended to take charge of legal and financial matters,
        thus allowing people to focus entirely on their work.
        Mad Devs helped BandPay turn their idea into a valuable tool used for project-based partnerships
        to automate agreements, process payments, and fulfil other functions.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full background-color-silver p-72_bottom media-p-24_bottom">
      <div class="container_regular">
        <h2 class="case_title_h2 case_title p-62_top media-p-41_top media-m-24_bottom">
          Achievements in figures
        </h2>
        <LazySharedLottieMad
          class="case_lottie"
          height="399px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bandpay/lottie/achievements.json`)"
          :autoplay="true"
        />
        <LazyCaseStudiesUIStatisticsContainer
          :grid="4"
          class="m-48_top"
        >
          <LazyCaseStudiesUIStatisticsCard
            v-for="(statisticsItem, i) in statisticsBandPay"
            :id="`about-item-${i}`"
            :key="statisticsItem.description"
            :number="statisticsItem.number"
            :number-text="statisticsItem.numberText"
            :name="statisticsItem.name"
            :without-space-before-number="statisticsItem.withoutSpaceBeforeNumber"
            :without-space-after-number="statisticsItem.withoutSpaceAfterNumber"
            :text-before-number="statisticsItem.textBeforeNumber"
            :has-space-before-number="false"
            :has-space-after-number="false"
            :number-color="statisticsItem.numberColor"
            :description="statisticsItem.description"
            :icon="statisticsItem.icon"
            section="about"
            :index="i"
          />
        </LazyCaseStudiesUIStatisticsContainer>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_title {
    text-align: center;
  }
}
:deep(.case_statistics-item:not(:first-child) .case_statistics-item_description) {
  padding: 0 48px;
  @media screen and (max-width: 820px) {
    padding: 0;
  }
}
</style>

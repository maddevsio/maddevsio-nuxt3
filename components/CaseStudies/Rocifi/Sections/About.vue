<script setup lang="ts">
import { statisticsRocifi } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'

useIntersectionObserver(['statistics-about-0', 'statistics-about-1', 'statistics-about-2'], countUp)
const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_rocifi__about m-96_bottom media-m-72_bottom">
    <div
      class="container_regular m-96_top m-96_bottom media-m-48_top media-m-48_bottom"
    >
      <LazyCaseStudiesUITextParagraph class="case_text-align-center">
        RociFi is a DeFi zero and under-collateralized lending protocol on Polygon. At its core, the protocol leverages
        on-chain data, machine learning, and loan risk management to effectively and profitably facilitate
        under-collateralized loans via the blockchain.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_full case_rocifi__about-container p-48_top p-48_bottom">
      <div class="case_rocifi__about-bg-wrapper">
        <img
          :src="$getMediaFromS3('/images/Cases/rocifi/png/about-bg.png')"
          alt="About bg"
          width="1440"
          height="737"
          class="case_rocifi__about-bg"
          loading="lazy"
        >
      </div>
      <div class="container_regular case_rocifi__about-regular-container">
        <LazyCaseStudiesUIStatisticsContainer
          :grid="3"
          :is-rocifi="true"
          class="p-12_top m-24_bottom"
        >
          <LazyCaseStudiesUIStatisticsCard
            v-for="(statisticsItem, i) in statisticsRocifi"
            :id="`about-item-${i}`"
            :key="statisticsItem.title"
            :number="statisticsItem.number"
            :number-text="statisticsItem.numberText"
            :name="statisticsItem.name"
            :without-space-before-number="statisticsItem.withoutSpaceBeforeNumber"
            :without-space-after-number="statisticsItem.withoutSpaceAfterNumber"
            :text-before-number="statisticsItem.textBeforeNumber"
            :has-space-before-number="false"
            :has-space-after-number="false"
            :number-color="statisticsItem.numberColor"
            :text-after-icon="statisticsItem.title"
            :icon="statisticsItem.icon"
            section="about"
            :with-separator="true"
            :is-rocifi="true"
            :index="i"
            :tag="'p'"
            :title-tag="false"
          />
        </LazyCaseStudiesUIStatisticsContainer>
        <LazyCaseStudiesRocifiUIAlertPlate
          description="RociFi's borrowers get access to fixed-rate, fixed-term 30-day USDC loans."
          color="russian-violet"
          class="m-72_bottom"
        />
        <p
          class="case_title_h5 case_text-align-center text-color-white m-24_bottom"
        >
          A crypto project backed by a group of industry leaders.
        </p>
        <LazyCaseStudiesRocifiUICryptoLeaderLogos />
        <LazyCaseStudiesRocifiUIAlertPlate
          :with-link-in-text="true"
          color="russian-violet-dark"
        >
          <LazyCaseStudiesUITextParagraph
            class="text-color-white"
          >
            <NuxtLink
              to="#glossary"
              class="case_rocifi__about-anchor-link"
            >
              Here
            </NuxtLink> is a glossary of terminology that we advise you to review before proceeding.
          </LazyCaseStudiesUITextParagraph>
        </LazyCaseStudiesRocifiUIAlertPlate>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_rocifi__about {
  &-container {
    position: relative;
    background: linear-gradient(180deg, #2D1669 0%, #110D25 100%);
  }

  &-regular-container {
    position: relative;
    z-index: 1;
  }

  &-bg-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  &-bg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &-anchor-link {
    color: #B36EFD;
  }

  @media screen and (max-width: 430px) {
    :deep(.case_statistics-item_icon) {
      width: 50px;
      height: 50px;
    }

    .case_title_h5 {
      font-size: 18px;
      line-height: 135%;
    }
  }
}
</style>

<script setup lang="ts">
import { infrastructureList } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="infrastructure m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h2 class="case_title_h2 m-12_bottom">
        Infrastructure Building
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-12_bottom">
        We analyzed parts of the current infrastructure, which had only the development and production parts,
        which were heavily overloaded and complicated. We collected resource requirements for the new pre-production
        environment, and as part of the new infrastructure, we ran all the applications in it.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUIListDots class="infrastructure__list m-48_bottom media-m-24_bottom">
        <LazyCaseStudiesUIListDotsItem
          v-for="(result, resultIndex) in infrastructureList"
          :key="resultIndex"
          class="infrastructure__list-item"
        >
          {{ result }}
        </LazyCaseStudiesUIListDotsItem>
      </LazyCaseStudiesUIListDots>
      <LazyCaseStudiesMobileBankingUIResultsWithQuoteBox
        quote-text="Such infrastructure changes have helped to significantly reduce cost and time, improving the continuous
        delivery of new features."
        quote-author="Gaukhar Taspolatova - Delivery Manager, Mad Devs"
        :title-tag="'h3'"
      />
    </div>
    <div class="infrastructure__lottie background-color-silver">
      <div class="container_regular infrastructure__lottie-container">
        <LazySharedLottieMad
          class="infrastructure__lottie-desktop"
          height="498px"
          :lottie-link="$getMediaFromS3(`/images/Cases/mobile-banking/lottie/infrastructure.json`)"
          :autoplay="true"
        />
        <LazySharedLottieMad
          class="infrastructure__lottie-tablet"
          height="498px"
          :lottie-link="$getMediaFromS3(`/images/Cases/mobile-banking/lottie/infrastructure-mobile.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.infrastructure {
  &__list-item {
    margin-bottom: 0;

    &::before {
      left: 9px;
    }
  }

  &__lottie {
    padding: 82px 0 80px;

    &-tablet {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    &__lottie {
      padding: 0;

      &-container {
        padding: 0;
      }

      &-tablet {
        display: block;
      }

      &-desktop {
        display: none;
      }
    }
  }
}
</style>

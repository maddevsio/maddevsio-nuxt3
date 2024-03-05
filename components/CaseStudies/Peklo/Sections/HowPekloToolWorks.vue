<script setup lang="ts">
import { howPekloToolWorksCards } from '~/components/CaseStudies/Peklo/constants/pekloConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom">
        How Peklo Tool works
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-24_bottom">
        In digital marketing, “contextual advertising” refers to a method of targeting ads based on what content users access. Advertisers use keywords to make sure that the users who see certain ads can actually be interested in buying the product.
      </LazyCaseStudiesUITextParagraph>
    </div>
    <div class="container_regular">
      <h3 class="case_title_h4 m-24_bottom media-m-12_bottom">
        Here’s how Peklo Tool increases the efficacy of contextual advertising:
      </h3>
      <div
        class="case_cards-list m-96_bottom media-m-48_bottom"
      >
        <LazyCaseStudiesUICard
          v-for="card in howPekloToolWorksCards"
          :key="card.title"
          :class="`case_card background-color-${card.color}`"
        >
          <h4 class="case_title_h5 case_card-title">
            {{ card.title }}
          </h4>
          <LazyCaseStudiesUITextParagraph class="case_card-description">
            {{ card.description }}
          </LazyCaseStudiesUITextParagraph>
          <img
            loading="lazy"
            :width="card.iconWidth"
            :height="card.iconHeight"
            :src="$getMediaFromS3(`/images/Cases/peklo/svg/${card.icon}.svg`)"
            :alt="card.title || 'Image'"
            class="case_card-icon"
          >
        </LazyCaseStudiesUICard>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_cards-list {
    @include grid(repeat(1, 1fr), auto, 0, 24px);

    @media screen and (max-width: 890px) {
      grid-row-gap: 16px;
    }
  }

  &_card {
    position: relative;
  }

  &_card-title {
    margin-bottom: 5px;
  }

  &_card-description {
    max-width: 498px;
  }

  &_card-icon {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &_iframe-wrapper {
    width: 1046px;
    height: 588px;
  }

  &_iframe {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1046px) {
    &_iframe-wrapper {
      position: relative;
      padding-bottom: 56.25%;
      width: 100%;
      height: 100%;
    }

    &_iframe {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media screen and (max-width: 890px) {
    &_card-description {
      max-width: 100%;
    }

    &_card-icon {
      display: none;
    }
  }
}
</style>

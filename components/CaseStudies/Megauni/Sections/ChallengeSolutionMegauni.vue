<script setup lang="ts">
import { challengeSolutionsMegaUniCards } from '~/components/CaseStudies/Megauni/constants/megauniConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case_megauni__challenge m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h3
        class="case_title_h2 m-48_bottom media-m-24_bottom"
      >
        From Challenge to Solution: Implementing the Features of Open edX
      </h3>
      <div
        class="case_megauni__challenge-cards"
      >
        <div
          v-for="(card, i) in challengeSolutionsMegaUniCards"
          :key="`${card.title}-${i}`"
          :class="`case_megauni__challenge-cards-item background-color-${card.backgroundColor}`"
          :style="{ 'paddingBottom': card.icon.name && '0px' }"
        >
          <Component
            :is="card.titleTag"
            class="case_title_h4 m-10_bottom"
          >
            {{ card.title }}
          </Component>
          <LazyCaseStudiesUITextParagraph class="case_megauni__challenge-cards-description">
            {{ card.description }}
          </LazyCaseStudiesUITextParagraph>
          <img
            v-if="card.icon.name"
            loading="lazy"
            :src="$getMediaFromS3(`/images/Cases/megauni/svg/${card.icon.name}.svg`)"
            :width="card.icon.sizes.width"
            :height="card.icon.sizes.height"
            :alt="card.icon.alt"
            :style="{ width: `${card.icon.sizes.width}px` }"
            class="case_megauni__challenge-cards-item-icon"
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case_megauni__challenge {
  &-cards {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;

    @media screen and (max-width: 430px) {
      gap: 8px;
    }

    &-item {
      width: 48.4%;
      flex: 1 1 auto;
      padding: 30px 28px 30px 32px;
      border-radius: 8px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 430px) {
        padding: 20px 20px;
        width: 100%;
      }

      &-icon {
        height: auto;
        align-self: flex-end;

        @media screen and (max-width: 960px) {
          margin-top: 40px;
        }

        @media screen and (max-width: 430px) {
          width: 93px;
          height: 93px;
          margin-right: -18px;
        }
      }

      &:nth-child(2) {
        .case_megauni__challenge-cards-item-icon {
          opacity: 0.5;
          margin-right: -6.83px;

          @media screen and (max-width: 430px) {
            width: 220px !important;
            height: 59px;
            margin-bottom: 24px;
          }
        }
      }
    }

    &-description {
      flex-grow: 1;
    }
  }
}
</style>

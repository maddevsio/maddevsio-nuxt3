<script setup lang="ts">
import { components } from '~/components/CaseStudies/Citycam/constants/citycamConstants'

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section>
    <div class="container_regular m-96_top media-m-48_top">
      <h2 class="case_title_h2 m-12_bottom">
        Reimagining power supply
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-96_bottom media-m-48_bottom">
        We refactored the devices’ hardware and software components to move on to a new concept of power supply. We got
        rid of double conversion to save up energy, and we also left linear conversion behind to increase efficiency.
      </LazyCaseStudiesUITextParagraph>
      <LazyCaseStudiesUITextQuote
        class="m-auto m-96_bottom media-m-48_bottom"
        author="Anton Kozlov, hardware engineer"
      >
        We devised a concept of uninterruptible power supply from power banks with instant switching to a backup Li+
        battery. As a result, energy consumption was halved.
      </LazyCaseStudiesUITextQuote>
      <LazyCaseStudiesUITextParagraph class="m-96_bottom media-m-48_bottom">
        We further gave up ready-made modules and started making our own boards: this was a way to reduce costs, simplify
        the circuitry, and introduce more flexibility in the development of the device.
      </LazyCaseStudiesUITextParagraph>
      <h2 class="case_title_h2 m-12_bottom">
        Active components of the device
      </h2>

      <div
        class="m-96_bottom media-m-24_bottom"
      >
        <LazyCaseStudiesUIListNumbered>
          <LazyCaseStudiesUIListNumberedItem
            v-for="component in components"
            :key="component.text"
            class="m-10_bottom media-m-24_bottom"
          >
            <template #bold>
              {{ component.title }}
            </template>
            {{ component.text }}
          </LazyCaseStudiesUIListNumberedItem>
        </LazyCaseStudiesUIListNumbered>
      </div>
    </div>
    <div
      class="container_full background-color-purple-blue m-96_bottom media-m-48_bottom"
    >
      <div class="container_regular">
        <h2 class="case_title_h2 case_subtitle p-48_top media-p-24_top m-24_bottom media-m-12_bottom">
          Board tracing
        </h2>
        <LazySharedLottieMad
          id="power-supply"
          class="case_lottie"
          height="670px"
          :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/board-tracing.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    padding-bottom: 48px;
    @media screen and (max-width: 576px) {
      padding-bottom: 24px;
    }
  }
  &_subtitle{
    text-align: center;
    @media screen and (max-width: 576px) {
      font-size: 20px;
    }
  }
}
</style>

<script setup lang="ts">
import { challengesAndSolutions, idSolutionsList } from '~/components/CaseStudies/Citycam/constants/citycamConstants'

useIntersectionObserver(
  idSolutionsList,
  setBackground,
)

const { $getMediaFromS3 } = useMediaFromS3()
</script>
<template>
  <section class="case-challenges">
    <div class="container_regular media-background-color-gray-lightened">
      <h2 class="case_title_h2 media-p-48_top m-16_bottom media-m-12_bottom">
        Challenges & solutions
      </h2>
      <LazyCaseStudiesUITextParagraph class="m-16_bottom media-m-24_bottom">
        The project’s two main ambitions were low energy use and high load capacity. To pursue the former, we engineered
        a device that could take photos and send them to the server every three seconds while using under one watt of
        electricity. A high-load service we were simultaneously building, in turn, needed to save and transmit images to
        the user app and the customer’s website. The general flow of the system went like this:
      </LazyCaseStudiesUITextParagraph>
      <div
        class="m-48_bottom media-m-24_bottom"
      >
        <LazySharedLottieMad
          id="challenges-solutions"
          class="case_lottie"
          height="570px"
          :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/challenges-solutions.json`)"
          :autoplay="true"
        />
      </div>
      <div
        class="p-80_bottom media-p-32_bottom"
      >
        <LazySharedListNumberedBox>
          <LazySharedListNumberedBoxItem
            v-for="(solution, i) in challengesAndSolutions"
            :id="`solution-item-${i}`"
            :key="solution.text"
            :data-background="solution.background"
          >
            {{ solution.text }}
          </LazySharedListNumberedBoxItem>
        </LazySharedListNumberedBox>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  &-challenges {
    :deep(.case_list-numbered_item) {
      background-color: $bgcolor--grey-cases;
      transition: 1s;
      @media screen and (max-width: 768px) {
        background-color: $bgcolor--grey-cases;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { mobileBankingFeatures } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <section class="features m-96_bottom media-m-48_bottom">
    <div
      class="container_regular"
    >
      <h2 class="case_title_h2 m-48_bottom media-m-24_bottom">
        Mobile Banking Features
      </h2>
      <LazyCaseStudiesUIColoredCards
        :cards-data="mobileBankingFeatures"
        grid-type="one-left-two-right"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.features {
  :deep(.colored-card__image-wrapper) {
    max-height: 300px;
  }
}
</style>

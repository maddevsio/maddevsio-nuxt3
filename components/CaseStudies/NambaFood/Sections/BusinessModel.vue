<script setup lang="ts">
import { businessModel } from '~/components/CaseStudies/NambaFood/constants/nambaFoodConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 case_text-align-center m-24_bottom media-m-12_bottom">
      Multi-directional business model
    </h2>
    <LazyCaseStudiesUITextParagraph class="m-24_bottom case_text-align-center">
      Namba Food achieves complete synergy by diversifying to multi-directional business models.
    </LazyCaseStudiesUITextParagraph>
    <LazyCaseStudiesUICard class="background-color-black">
      <LazyCaseStudiesNambaFoodUICardNinjaSushi />
    </LazyCaseStudiesUICard>
    <div class="cards">
      <LazyCaseStudiesUIColoredCards
        :cards-data="businessModel"
        grid-type="one-left-two-right"
      />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.cards {
  margin-top: 24px;
}
</style>

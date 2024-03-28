<script setup lang="ts">
import { coloredCardsItems } from '~/components/CaseStudies/Bandpay/constants/bandpayConstants'
</script>
<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3 class="case_title_h2 case_title m-12_bottom">
      Opportunities with BandPay
    </h3>
    <LazyCaseStudiesUIColoredCards
      :cards-data="coloredCardsItems.slice(0, 3)"
      grid-type="two-one"
      class="m-24_bottom"
    />
    <LazyCaseStudiesUIColoredCards
      :cards-data="coloredCardsItems.slice(3)"
      grid-type="one-left-two-right"
    />
  </section>
</template>

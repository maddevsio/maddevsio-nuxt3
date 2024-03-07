<script setup lang="ts">
import { benefitsCards } from '~/components/CaseStudies/Peklo/constants/pekloConstants'
</script>
<template>
  <section
    class="container_regular m-72_bottom media-m-48_bottom"
  >
    <h2 class="case_title_h2 m-24_bottom">
      Who benefits from Peklo Tool
    </h2>
    <LazyCaseStudiesUIColoredCards
      :cards-data="benefitsCards"
      grid-type="two-one"
    />
  </section>
</template>

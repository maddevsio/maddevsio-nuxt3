<script setup lang="ts">
import { developmentGoals } from '~/components/CaseStudies/Godee/constants/godeeConstants'
</script>
<template>
  <section
    class="container_regular m-96_bottom media-m-46_bottom"
  >
    <h3
      class="case_title_h2 m-24_bottom case_text-align-center"
    >
      Development goals
    </h3>
    <LazyCaseStudiesUIParallaxCards
      :data-cards="developmentGoals"
    />
  </section>
</template>

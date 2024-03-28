<script setup lang="ts">
import { ProjectsIssuesCards } from '~/components/CaseStudies/Guardrails/constants/guardrailsConstants'
</script>
<template>
  <section
    class="container_regular"
  >
    <h2 class="case_title_h2 m-24_bottom">
      Project issues and how we resolved them
    </h2>
    <LazyCaseStudiesUIColoredCards
      :cards-data="ProjectsIssuesCards"
      grid-type="two-two"
      class="m-72_bottom media-m-48_bottom"
    />
  </section>
</template>

<script setup lang="ts">
import { techStackMegauni } from '~/components/CaseStudies/Megauni/constants/megauniConstants'
</script>
<template>
  <section class="container_regular">
    <h3
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      Technologies We Used
    </h3>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in techStackMegauni"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>

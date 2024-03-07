<script setup lang="ts">
import { techStackMobileBanking } from '~/components/CaseStudies/MobileBanking/constants/mobileBankingConstants'
</script>
<template>
  <section class="container_regular">
    <h3
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      Technology stack
    </h3>
    <LazyCaseStudiesUIListTechnologies
      class="m-96_bottom media-m-48_bottom"
    >
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in techStackMobileBanking"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>

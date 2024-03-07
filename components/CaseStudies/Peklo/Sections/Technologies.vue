<script setup lang="ts">
import { technologies } from '~/components/CaseStudies/Peklo/constants/pekloConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Technology stack
    </h2>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in technologies"
        :key="technology.name"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>

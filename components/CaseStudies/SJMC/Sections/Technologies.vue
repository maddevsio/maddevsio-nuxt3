<script setup lang="ts">
import { technologies } from '~/components/CaseStudies/SJMC/constants/sjmcConstants'
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-48_bottom media-m-24_bottom">
      Technology stack
    </h3>
    <LazyCaseStudiesUIListTechnologies class="m-107_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in technologies"
        :key="technology.name"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>

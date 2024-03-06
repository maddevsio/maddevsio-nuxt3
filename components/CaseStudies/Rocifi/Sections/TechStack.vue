<script setup lang="ts">
import { techStackRocifi } from '~/components/CaseStudies/Rocifi/constants/rocifiConstants'
</script>
<template>
  <section
    class="container_regular case_rocifi__tech-stack"
  >
    <h3
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      Technology stack
    </h3>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in techStackRocifi"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>

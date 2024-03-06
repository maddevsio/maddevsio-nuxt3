<script setup lang="ts">
import { technologies } from '~/components/CaseStudies/Godee/constants/godeeConstants'
</script>
<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">
      Technology stack
    </h3>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom case_list-technologies-godee">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in technologies"
        :key="technology.name"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>

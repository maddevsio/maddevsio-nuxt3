<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Technology stack
    </h2>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in techStackClutch"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>
<script setup lang="ts">
import { techStackClutch } from '~/components/CaseStudies/Clutch/constants/clutchConstants'
</script>
<style lang="scss" scoped>
.case {
  &_tech-list-item {
    :deep(p) {
      font-size: 12px;
    }

    :deep(.django) {
      width: 57px;
    }

    @media screen and (max-width: 768px) {
      :deep(p) {
        font-size: 8px;
      }
      :deep(.django) {
        width: 30px;
      }
    }
  }
}
</style>

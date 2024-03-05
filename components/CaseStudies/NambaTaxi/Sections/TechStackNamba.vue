<script setup lang="ts">
import { techStackNambaTaxi } from '~/components/CaseStudies/NambaTaxi/constants/nambaTaxiConstants'
</script>
<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom case_technology-title">
      Technologies we used
    </h2>
    <LazyCaseStudiesUIListTechnologies class="m-96_bottom media-m-48_bottom">
      <LazyCaseStudiesUIListTechnologiesItem
        v-for="technology in techStackNambaTaxi"
        :key="technology.name"
        class="case_tech-list-item"
        v-bind="technology"
      />
    </LazyCaseStudiesUIListTechnologies>
  </section>
</template>
<style lang="scss" scoped>
.case {
  &_technology-title{
    text-align: center;
  }
  &_tech-list-item {
    :deep(.django) {
      width: 57px;
    }
    :deep(.osrm), :deep(.django-rest) {
      width: 63px;
    }

    @media screen and (max-width: 768px) {
      :deep(p) {
        font-size: 8px;
      }
      :deep(.django), :deep(.osrm) {
        width: 30px;
      }
    }
  }
}
</style>

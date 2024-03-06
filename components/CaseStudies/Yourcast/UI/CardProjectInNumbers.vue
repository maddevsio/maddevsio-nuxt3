<script setup lang="ts">
import { projectInNumbersStatistics } from '~/components/CaseStudies/Yourcast/constants/yourcastConstants'
</script>
<template>
  <section class="card-project">
    <div class="container_full m-48_top media-m-24_top">
      <LazyCaseStudiesUIStatisticsContainer
        :grid="4"
      >
        <LazyCaseStudiesUIStatisticsCard
          v-for="(projectInNumber, i) in projectInNumbersStatistics"
          :id="`projectInNumbers-item-${i}`"
          :key="projectInNumber.description"
          :number="projectInNumber.number"
          :number-text="projectInNumber.numberText"
          :name="projectInNumber.name"
          :number-color="projectInNumber.numberColor"
          :description="projectInNumber.description"
          :icon="projectInNumber.icon"
          section="projectInNumbers"
          :index="i"
          :without-space-after-number="true"
        />
      </LazyCaseStudiesUIStatisticsContainer>
    </div>
  </section>
</template>
<style scoped lang="scss">
.card-project {
  :deep(.case_paragraph) {
    padding: 0 48px;
    @media screen and (max-width: 820px) {
      padding: 0;
    }
  }
}
</style>

<script setup lang="ts">
defineProps({
  resultData: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div
    class="container_regular challenge-results"
  >
    <h4 class="case_title_h4 m-12_bottom">
      Results
    </h4>
    <LazyCaseStudiesUIListDots class="challenge-results__list">
      <LazyCaseStudiesUIListDotsItem
        v-for="(result, resultIndex) in resultData"
        :key="resultIndex"
        class="challenge-results__list-item"
      >
        {{ result }}
      </LazyCaseStudiesUIListDotsItem>
    </LazyCaseStudiesUIListDots>
  </div>
</template>
<style lang="scss" scoped>
.challenge-results {
  &__list-item {
    margin-bottom: 0;

    &::before {
      left: 9px;
    }
  }
}
</style>

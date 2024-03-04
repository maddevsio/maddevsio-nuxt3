<script setup lang="ts">
import { caseStudiesComponents } from '~/components/CaseStudies/Slices/index'

defineProps({
  slices: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="cases-components">
    <LazySliceZone
      :slices="slices"
      :components="caseStudiesComponents"
    />
  </div>
</template>

<style scoped lang="scss">

</style>

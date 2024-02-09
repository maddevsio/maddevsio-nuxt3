<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyTechAndToolsFourBigCards
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyTechAndToolsThreeBigCards
    v-if="slice.variation === 'threeBigCards'"
    :slice="slice"
  />
  <LazyTechAndToolsTwoBigCards
    v-if="slice.variation === 'twoBigCards'"
    :slice="slice"
  />
  <LazyTechAndToolsOneBigCard
    v-if="slice.variation === 'oneBigCard'"
    :slice="slice"
  />
</template>

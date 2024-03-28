<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksTechAndToolsFourBigCards
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksTechAndToolsThreeBigCards
    v-if="slice.variation === 'threeBigCards'"
    :slice="slice"
  />
  <LazyPageBlocksTechAndToolsTwoBigCards
    v-if="slice.variation === 'twoBigCards'"
    :slice="slice"
  />
  <LazyPageBlocksTechAndToolsOneBigCard
    v-if="slice.variation === 'oneBigCard'"
    :slice="slice"
  />
</template>

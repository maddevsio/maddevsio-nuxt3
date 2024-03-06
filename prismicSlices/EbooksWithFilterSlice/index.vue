<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksEbookWithFilter
    v-if="slice.variation === 'default-slice'"
  />
</template>

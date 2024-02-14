<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksTableCustomPage
    v-if="slice.variation === 'forCustomPage'"
    :slice="slice"
  />
</template>

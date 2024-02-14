<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksPostsSectionDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksPostsSectionWithoutAuthor
    v-if="slice.variation === 'ebookPostsSectionSlice'"
    :slice="slice"
  />
</template>

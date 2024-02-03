<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPostsSectionDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPostsSectionWithoutAuthor
    v-if="slice.variation === 'ebookPostsSectionSlice'"
    :slice="slice"
  />
</template>

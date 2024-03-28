<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksFormEbookSection
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksFormChecklistBanner
    v-if="slice.variation === 'checklistForm'"
    :slice="slice"
  />
</template>

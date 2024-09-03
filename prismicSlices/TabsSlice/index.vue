<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksTabSliceComponentsDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksTabSliceComponentsWithRichText
    v-if="slice.variation === 'tabsWithRichText'"
    :slice="slice"
  />
</template>

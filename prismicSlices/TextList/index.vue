<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksTextListDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksTextListTwoColumns
    v-if="slice.variation === 'twoColumnsList'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyTextListDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyTextListTwoColumns
    v-if="slice.variation === 'twoColumnsList'"
    :slice="slice"
  />
</template>

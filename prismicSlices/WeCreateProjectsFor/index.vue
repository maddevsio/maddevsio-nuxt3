<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyWeCreateProjectsForWithMap
    v-if="slice.variation === 'weCreateProjectsForWithMap'"
    :slice="slice"
  />
</template>

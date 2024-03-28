<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyWidgetsTableOfContentHorizontal
    :slice="slice"
  />
</template>

<script setup lang="ts">
const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPressCenterDefault
    :slice="props.slice"
  />
</template>

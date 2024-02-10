<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyImageSliceImage
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
</template>

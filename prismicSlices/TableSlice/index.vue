<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyTableCustomPage
    v-if="slice.variation === 'forCustomPage'"
    :slice="slice"
  />
</template>

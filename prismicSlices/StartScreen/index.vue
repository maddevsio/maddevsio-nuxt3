<script setup lang="ts">
const { slice } = defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>
<template>
  <LazyStartScreenMain
    v-if="slice.variation === 'mainStartScreen'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksCustomersReviewFromClutch
    v-if="slice.variation === 'clutchReviewsBlack'"
    :slice="slice"
  />
</template>

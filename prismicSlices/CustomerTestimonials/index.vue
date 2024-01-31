<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <CustomersReviewFromClutch
    v-if="slice.variation === 'clutchReviewsBlack'"
    :slice="slice"
  />
</template>

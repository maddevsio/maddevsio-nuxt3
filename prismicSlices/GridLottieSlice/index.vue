<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksGridLottieLink
    v-if="slice.variation === 'gridLottieLink'"
    :slice="slice"
  />
  <LazyPageBlocksGridLottieWithCaseStudy
    v-if="slice.variation === 'gridLottieWithCaseStudy'"
    :slice="slice"
  />
  <LazyPageBlocksGridLottieWithAnimationOptions
    v-if="slice.variation === 'gridWithAnimationOptionSlice'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyGridLottieLink
    v-if="slice.variation === 'gridLottieLink'"
    :slice="slice"
  />
  <LazyGridLottieWithCaseStudy
    v-if="slice.variation === 'gridLottieWithCaseStudy'"
    :slice="slice"
  />
  <LazyGridLottieWithAnimationOptions
    v-if="slice.variation === 'gridWithAnimationOptionSlice'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksCustomersReviewFromClutch
      v-if="slice.variation === 'clutchReviewsBlack'"
      :slice="slice"
    />
    <LazyPageBlocksCustomersReviewFromClutchWithSlider
      v-if="slice.variation === 'clutchReviewsWithSlider'"
      :slice="slice"
    />
  </NuxtLazyHydrate>
</template>

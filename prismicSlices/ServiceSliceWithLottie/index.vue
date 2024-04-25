<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksServiceWithLottieDefault
      :slice="slice"
    />
  </NuxtLazyHydrate>
</template>

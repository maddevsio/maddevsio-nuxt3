<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksCustomersRatesSlice
      :slice="slice"
    />
  </NuxtLazyHydrate>
</template>

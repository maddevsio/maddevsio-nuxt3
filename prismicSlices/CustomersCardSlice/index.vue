<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksCustomersCardSlice
      :slice="slice"
    />
  </NuxtLazyHydrate>
</template>

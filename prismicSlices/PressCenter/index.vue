<script setup lang="ts">
const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksPressCenterDefault
      :slice="props.slice"
    />
  </NuxtLazyHydrate>
</template>

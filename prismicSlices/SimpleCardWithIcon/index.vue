<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksSimpleCardWithIcon
      :slice="slice"
    />
  </NuxtLazyHydrate>
</template>

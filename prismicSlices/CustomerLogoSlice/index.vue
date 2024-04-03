<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <NuxtLazyHydrate when-visible>
    <LazyPageBlocksCustomerLogoDefault
      v-if="slice.variation === 'default'"
      :slice="slice"
    />
    <LazyPageBlocksCustomerLogoInteractive
      v-if="slice.variation === 'customersLogoInteractive'"
      :slice="slice"
    />
  </NuxtLazyHydrate>
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyCustomerLogoDefault
    v-if="slice.variation === 'default'"
    :slice="slice"
  />
  <LazyCustomerLogoInteractive
    v-if="slice.variation === 'customersLogoInteractive'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <ServiceWithLottieDefault
    :slice="slice"
  />
</template>

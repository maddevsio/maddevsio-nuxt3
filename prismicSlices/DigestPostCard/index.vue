<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksDigestPostCardDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
</template>

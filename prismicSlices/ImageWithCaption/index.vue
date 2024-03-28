<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksImageWithCaptionCustomPage
    v-if="slice.variation === 'default-slice'"
    :slice-prismic="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksAuthorsPost
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksAuthorsCustomizable
    v-if="slice.variation === 'customizableAuthorsSlice'"
    :slice="slice"
  />
</template>

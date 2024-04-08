<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <PageBlocksAuthorsList
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
</template>

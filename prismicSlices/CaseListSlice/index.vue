<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <PageBlocksCaseListDefault
    :slice="slice"
  />
</template>

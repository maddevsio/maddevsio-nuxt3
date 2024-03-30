<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <PageBlocksButtonSliceFullFilled
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <PageBlocksButtonSliceOutline
    v-if="slice.variation === 'outlinedButton'"
    :slice="slice"
  />
  <PageBlocksButtonSliceOutlinedLight
    v-if="slice.variation === 'outlinedLightButtonSlice'"
    :slice="slice"
  />
</template>

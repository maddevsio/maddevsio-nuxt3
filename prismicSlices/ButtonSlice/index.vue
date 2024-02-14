<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksButtonSliceFullFilled
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksButtonSliceOutline
    v-if="slice.variation === 'outlinedButton'"
    :slice="slice"
  />
  <LazyPageBlocksButtonSliceOutlinedLight
    v-if="slice.variation === 'outlinedLightButtonSlice'"
    :slice="slice"
  />
</template>

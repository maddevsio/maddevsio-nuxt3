<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyButtonSliceFullFilled
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyButtonSliceOutline
    v-if="slice.variation === 'outlinedButton'"
    :slice="slice"
  />
  <LazyButtonSliceOutlinedLight
    v-if="slice.variation === 'outlinedLightButtonSlice'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyCardWithColoredTitleDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyCardWithColoredTitleWithIcon
    v-if="slice.variation === 'cardWithColoredTitleAndIcon'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksCardWithColoredTitleDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksCardWithColoredTitleWithIcon
    v-if="slice.variation === 'cardWithColoredTitleAndIcon'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <PageBlocksCardWithColoredTitleDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <PageBlocksCardWithColoredTitleWithIcon
    v-if="slice.variation === 'cardWithColoredTitleAndIcon'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksAccordionCustomPage
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksAccordionForPost
    v-if="slice.variation === 'accordionForPost'"
    :slice="slice"
  />
</template>

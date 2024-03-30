<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <PageBlocksAccordionCustomPage
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <PageBlocksAccordionForPost
    v-if="slice.variation === 'accordionForPost'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyAccordionCustomPage
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyAccordionForPost
    v-if="slice.variation === 'accordionForPost'"
    :slice="slice"
  />
</template>

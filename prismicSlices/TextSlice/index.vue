<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyTypographyTextSimple
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyTypographyTextFlexibleParagraph
    v-if="slice.variation === 'flexibleParagraph'"
    :slice="slice"
  />
  <LazyTypographyTextParagraph
    v-if="slice.variation === 'paragraph'"
    :slice="slice"
  />
  <LazyTypographyTextTitle
    v-if="slice.variation === 'title'"
    :slice="slice"
  />
</template>

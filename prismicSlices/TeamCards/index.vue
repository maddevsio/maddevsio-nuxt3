<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyTeamCardsDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyTeamCardsWithRoundedPhoto
    v-if="slice.variation === 'teamCardsWithRoundedPhoto'"
    :slice="slice"
  />
  <LazyTeamCardsCaseStudies
    v-if="slice.variation === 'teamCardsCaseStudies'"
    :slice="slice"
  />
</template>

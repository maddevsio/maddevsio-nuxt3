<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksTeamCardsDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksTeamCardsWithRoundedPhoto
    v-if="slice.variation === 'teamCardsWithRoundedPhoto'"
    :slice="slice"
  />
  <LazyPageBlocksTeamCardsCaseStudies
    v-if="slice.variation === 'teamCardsCaseStudies'"
    :slice="slice"
  />
</template>

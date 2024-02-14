<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksAchievementsDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
</template>

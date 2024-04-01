<script setup lang="ts">
const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <div>
    <PageBlocksAwardsVariationDefault
      v-if="props.slice.variation === 'default-slice'"
      :slice="props.slice"
    />
    <PageBlocksAwardsVariationCertificates
      v-else-if="props.slice.variation === 'certificates'"
      :slice="props.slice"
    />
  </div>
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>

<template>
  <section class="comparison-slice">
    <LazyPageBlocksComparisonDefault
      v-if="slice.variation === 'default'"
      :slice="slice"
    />
  </section>
</template>

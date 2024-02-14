<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="process-root-slice">
    <LazyPageBlocksProcessTabsDefault
      v-if="slice.variation === 'default-slice'"
      :slice="slice"
    />
    <LazyPageBlocksProcessInline
      v-else-if="slice.variation === 'processInlineSlice'"
      :slice="slice"
    />
  </section>
</template>

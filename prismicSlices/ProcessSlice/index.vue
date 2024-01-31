<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="process-root-slice">
    <LazyProcessTabsDefault
      v-if="slice.variation === 'default-slice'"
      :slice="slice"
    />
    <LazyProcessInline
      v-else-if="slice.variation === 'processInlineSlice'"
      :slice="slice"
    />
  </section>
</template>

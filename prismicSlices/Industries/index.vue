<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="industries-slice">
    <LazyPageBlocksIndustriesDefault
      v-if="slice.variation === 'default-slice'"
      :slice="slice"
    />
    <LazyPageBlocksIndustriesCard
      v-else-if="slice.variation === 'industriesCardSlice'"
      :slice="slice"
    />
    <LazyPageBlocksIndustriesCardDescription
      v-else-if="slice.variation === 'industriesCardDescription'"
      :slice="slice"
    />
  </section>
</template>

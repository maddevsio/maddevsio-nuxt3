<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="industries-slice">
    <IndustriesDefault
      v-if="slice.variation === 'default-slice'"
      :slice="slice"
    />
    <IndustriesCard
      v-else-if="slice.variation === 'industriesCardSlice'"
      :slice="slice"
    />
    <IndustriesCardDescription
      v-else-if="slice.variation === 'industriesCardDescription'"
      :slice="slice"
    />
  </section>
</template>

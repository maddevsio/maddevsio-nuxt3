<script setup lang="ts">
const IndustriesDefault = defineAsyncComponent(() => import('./variations/IndustriesDefault.vue'))
const IndustriesCardSlice = defineAsyncComponent(() => import('./variations/IndustriesCardSlice.vue'))

const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section class="industries-slice">
    <IndustriesDefault
      v-if="props.slice.variation === 'default-slice'"
    />
    <IndustriesCardSlice
      v-else-if="props.slice.variation === 'industriesCardSlice'"
      v-bind="props"
    />
    <!--    <IndustriesCardDescription-->
    <!--      v-else-if="slice.variation === 'industriesCardDescription'"-->
    <!--      :slice="slice"-->
    <!--    />-->
  </section>
</template>

<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section
    class="customers-logo-slice"
  >
    <NuxtLazyHydrate when-visible>
      <LazyPageBlocksCustomersLogoWhite
        v-if="slice.variation === 'default-slice'"
      />
      <LazyPageBlocksCustomersLogoBlack
        v-else-if="slice.variation === 'customersSliceBlack'"
      />
    </NuxtLazyHydrate>
  </section>
</template>

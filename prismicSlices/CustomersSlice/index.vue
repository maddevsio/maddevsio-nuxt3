<script setup lang="ts">
const CustomersWhite = defineAsyncComponent(() => import('./variations/CustomersWhite.vue'))
const CustomersBlack = defineAsyncComponent(() => import('./variations/CustomersBlack.vue'))

const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section
    class="customers-logo-slice"
  >
    <CustomersWhite
      v-if="slice.variation === 'default-slice'"
    />
    <CustomersBlack
      v-else-if="slice.variation === 'customersSliceBlack'"
    />
  </section>
</template>

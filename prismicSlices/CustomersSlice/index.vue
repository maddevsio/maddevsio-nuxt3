<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <section
    class="customers-logo-slice"
  >
    <CustomersLogoWhite
      v-if="slice.variation === 'default-slice'"
    />
    <CustomersLogoBlack
      v-else-if="slice.variation === 'customersSliceBlack'"
    />
  </section>
</template>

<script setup lang="ts">
import { checklistComponents } from '~/components/Checklists/Slices/index'

defineProps({
  slices: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="cases-components">
    <LazySliceZone
      :slices="slices"
      :components="checklistComponents"
    />
  </div>
</template>

<style scoped lang="scss">

</style>

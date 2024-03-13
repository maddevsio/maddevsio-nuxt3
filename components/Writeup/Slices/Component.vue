<script setup lang="ts">
import { writeupComponents } from '~/components/Writeup/Slices/index'

defineProps({
  slices: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="writeup-components">
    <LazySliceZone
      :slices="slices"
      :components="writeupComponents"
    />
  </div>
</template>

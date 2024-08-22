<script setup lang="ts">
import { type Content } from '@prismicio/client'
const { slice } = defineProps(getSliceComponentProps<Content.TextWithBorderSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
  <LazyPageBlocksTextWithBorderDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
</template>

<script setup lang="ts">
import { type Content } from '@prismicio/client'
const { slice } = defineProps(getSliceComponentProps<Content.KeyPointCardSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
  <LazyPageBlocksKeyPointCardDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
</template>

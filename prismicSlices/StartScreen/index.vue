<script setup lang="ts">
import { type Content } from '@prismicio/client'
const MainStartScreen = defineAsyncComponent(() => import('./variations/MainStartScreen.vue'))

const props = defineProps(
  getSliceComponentProps<Content.StartScreenSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>
<template>
  <MainStartScreen
    v-if="props.slice.variation === 'mainStartScreen'"
    v-bind="props"
  />
</template>

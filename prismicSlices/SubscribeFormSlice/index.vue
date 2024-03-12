<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyPageBlocksSubscribeFormDefault
    v-if="slice.variation === 'default-slice'"
    :slice="slice"
  />
  <LazyPageBlocksSubscribeFormDigest
    v-if="slice.variation === 'subscribeFormDigest'"
    :slice="slice"
  />
</template>

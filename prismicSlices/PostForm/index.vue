<script setup lang="ts">
const { slice } = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>
<template>
  <LazyWidgetsFormService
    v-if="slice.variation === 'default-slice'"
    form-uid="post-form-slice"
    :slice="slice"
  />
</template>

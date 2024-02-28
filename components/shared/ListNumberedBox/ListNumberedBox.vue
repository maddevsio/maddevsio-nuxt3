<script setup lang="ts">
defineProps({
  unorderedList: {
    type: [Object, Boolean],
    default: false,
  },
})
</script>
<template>
  <Component
    :is="unorderedList ? 'ul' : 'ol'"
    class="case-list_numbered"
  >
    <slot />
  </Component>
</template>
<style scoped lang="scss">
.case-list_numbered {
  padding: 0;
  counter-reset: section;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
</style>

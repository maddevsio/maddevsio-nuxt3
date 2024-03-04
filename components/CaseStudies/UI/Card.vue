<script setup lang="ts">
defineProps({
  padding: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    :style="`padding: ${padding}`"
    class="case_card"
  >
    <slot />
  </div>
</template>
<style scoped lang="scss">
.case_card {
  position: relative;
  overflow: hidden;
  @include card(auto, auto, 32px, 8px);

  @media screen and (max-width: 768px) {
    @include card(auto, auto, 20px, 8px);
  }
}
</style>

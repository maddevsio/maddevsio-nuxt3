<script setup lang="ts">
const {
  error,
} = defineProps({
  error: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="error">
    <p class="error__text">
      {{ error.toString() }}
    </p>
  </div>
</template>
<style scoped lang="scss">
.error {
  &__text {
    @include font('Inter', 24px, 400);
  }
}
</style>

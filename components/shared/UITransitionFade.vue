<script setup lang="ts">
defineProps({
  duration: {
    type: String,
    default: '0.5s',
  },
  timingFunction: {
    type: String,
    default: 'ease-in-out',
  },
})
</script>

<template>
  <Transition
    name="fade"
    appear
  >
    <slot />
  </Transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind('duration') v-bind('timingFunction');
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

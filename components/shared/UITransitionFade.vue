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
  mode: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Transition
    v-if="!mode"
    name="fade"
    appear
  >
    <slot />
  </Transition>
  <Transition
    v-else
    name="fade"
    :mode="mode"
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

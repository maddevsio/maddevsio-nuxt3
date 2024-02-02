<script setup lang="ts">
const { animationType } = defineProps({
  animationType: {
    type: String,
    default: 'collapse',
  },
})

const transitionStart = (el: HTMLElement) => {
  el.style.height = `${ el.scrollHeight }px`
}

const transitionEnd = (el: HTMLElement) => {
  el.style.height = 'unset'
}
</script>
<template>
  <Transition
    :name="animationType"
    @enter="transitionStart"
    @after-enter="transitionEnd"
    @before-leave="transitionStart"
    @after-leave="transitionEnd"
  >
    <slot />
  </Transition>
</template>
<style lang="scss" scoped>
.collapse-enter-active,
.collapse-leave-active {
  will-change: height, opacity;
  transition: height 0.35s ease-in-out, opacity 0.35s ease-in-out;
  overflow: hidden;
}

.collapse-enter,
.collapse-leave-to {
  height: 0 !important;
  opacity: 0;
}

.collapse-fade-up-enter-active,
.collapse-fade-up-leave-active {
  transition: 0.4s ease;
}

.collapse-fade-up-enter,
.collapse-fade-up-leave-to {
  height: 0 !important;
  transform: translateY(100px);
  opacity: 0;
}
</style>

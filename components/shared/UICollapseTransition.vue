<template>
  <transition
    :name="animationType"
    @enter="transitionStart"
    @after-enter="transitionEnd"
    @before-leave="transitionStart"
    @after-leave="transitionEnd"
  >
    <slot />
  </transition>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UICollapseTransition',

  props: {
    animationType: {
      type: String,
      default: 'collapse',
    },
  },

  setup() {
    const transitionStart = el => {
      el.style.height = `${el.scrollHeight}px`
    }

    const transitionEnd = el => {
      el.style.height = null
    }

    return {
      transitionEnd,
      transitionStart,
    }
  },
})
</script>
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

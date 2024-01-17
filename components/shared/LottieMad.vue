<script setup lang="ts">
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

const {
  setMinHeight,
  lottieLink,
  loop,
  height,
  width,
  autoplay,
} = defineProps({
  height: {
    type: String,
    default: '100%',
  },

  width: {
    type: String,
    default: '100%',
  },

  lottieLink: {
    type: String,
    default: '',
  },

  loop: {
    type: Boolean,
    default: false,
  },

  autoplay: {
    type: Boolean,
    default: false,
  },

  setMinHeight: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['animCreated'])

const lavContainer = ref<Element | null>(null)

const createLottie = () => {
  import('lottie-web').then(lottie => {
    if (lavContainer.value) {
      const anim = lottie.default.loadAnimation({
        container: lavContainer.value,
        renderer: 'svg',
        loop,
        autoplay,
        path: lottieLink,
        assetsPath: 'https://d6xkme6dcvajw.cloudfront.net/',
      })
      emit('animCreated', anim)
    }
  })
}

const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserverInstance) => entries.forEach(({ isIntersecting, target }) => {
  if (!isIntersecting) { return }
  createLottie()
  observer.unobserve(target)
})

onMounted(() => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 })
    if (lavContainer.value) {
      observer.observe(lavContainer.value)
    }
  }
})
</script>
<template>
  <div
    ref="lavContainer"
    class="lottie-container"
    :class="{ 'lottie-container--min-height': setMinHeight }"
  />
</template>
<style lang="scss" scoped>
.lottie-container {
  min-height: v-bind('height');
  width: v-bind('width');
  overflow: hidden;
  margin: 0 auto;

  :deep(svg) {
    transform: unset !important;
  }

  @media screen and (max-width: 990px) {
    width: 100%;

    &--min-height {
      min-height: 20vw;
    }
  }
}
</style>

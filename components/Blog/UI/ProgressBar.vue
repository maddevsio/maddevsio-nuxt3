<script setup lang="ts">
const progressBar = ref<HTMLElement | null>(null)
const { headerHeight } = storeToRefs(useHeaderStore())
const indentFromHeader = ref(66)
const calcProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  if (progressBar.value) {
    progressBar.value.style.width = `${ scrolled }%`
  }
}

onMounted(() => {
  indentFromHeader.value = headerHeight.value
  window.addEventListener('scroll', calcProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', calcProgress)
})

watch(headerHeight, newVal => {
  indentFromHeader.value = newVal
})
</script>
<template>
  <div
    ref="progressBar"
    class="progress-bar"
    :style="{ 'top': `${indentFromHeader}px` }"
  />
</template>
<style lang="scss" scoped>
.progress-bar {
  width: 0;
  height: 4px;
  position: fixed;
  background-color: $bgcolor--red;
  z-index: 12;

  @media screen and (max-width: 1012px) {
    top: 98px;
  }

  @media screen and (max-width: 690px) {
    top: 110px;
  }

  @media screen and (max-width: 490px) {
    top: 94px;
  }
}
</style>

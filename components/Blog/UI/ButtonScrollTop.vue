<script setup lang="ts">
const buttonIsActive = ref(false)
const scrollToTop = () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
})

const showScrollButton = (event: Event) => {
  const target = event.target as Document
  if (target.scrollingElement) {
    buttonIsActive.value = Boolean(target.scrollingElement.scrollTop !== 0)
  }
}

onMounted(() => {
  window.addEventListener('scroll', showScrollButton)
})

onUnmounted(() => {
  window.removeEventListener('scroll', showScrollButton)
})
</script>
<template>
  <button
    v-if="buttonIsActive"
    class="scroll-to-top-button"
    data-testid="test-back-list"
    @click="scrollToTop"
  >
    <i />
  </button>
</template>
<style lang="scss" scoped>
.scroll-to-top-button {
  padding: 12px 14px 4px;
  position: fixed;
  left: 28px;
  bottom: 20px;
  background-color: $bgcolor--red;
  border: 1px solid $border-color--red;
  border-radius: 2px;
  transition: 0.2s;
  cursor: pointer;
  i {
    display: inline-block;
    padding: 4px;
    border: solid $border-color--white;
    border-width: 0 3px 3px 0;
    transform: rotate(-135deg);
  }
  &:hover {
    background-color: $button-active--red;
  }
}
</style>

<script setup lang="ts">
const route = useRoute()
const emit = defineEmits(['on-close'])
const close = () => {
  emit('on-close')
}

const cleanUp = () => {
  close()
}

const listenKeys = event => {
  if (event.keyCode === 27) { cleanUp() }
}

onMounted(() => {
  document.addEventListener('keyup', listenKeys)
})

onUnmounted(() => {
  document.removeEventListener('keyup', listenKeys)
})

watch(route, () => close())
</script>
<template>
  <section
    class="modal-search"
    @click.self="close"
  >
    <LazyWidgetsSearchPanel
      :is-active-search-panel="true"
      :modal-search="true"
      @is-active-search-bar="close"
    />
  </section>
</template>
<style lang="scss" scoped>
.modal-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 15px;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.9);
  z-index: 999;
  box-sizing: border-box;
  overflow: auto;
}
</style>

<script setup lang="ts">
interface Props {
  content: string
  iconWidth: number
  iconHeight: number
  iconFillColor: string
}
withDefaults(defineProps<Props>(), {
  iconWidth: 15,
  iconHeight: 15,
  iconFillColor: '#707072',
})

const isCopied = ref(false)

const copyContent = (content: string) => {
  copyToClipboard(content)
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 3000)
}
</script>
<template>
  <button
    class="copy-to-clipboard-btn"
    @click="copyContent(content)"
  >
    <svg
      v-if="!isCopied"
      :style="`width: ${iconWidth}px; min-width: ${iconWidth}px; height: ${iconHeight}px; fill: ${iconFillColor}`"
      class="copy-to-clipboard-btn__icon"
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
    ><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" /><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" /></svg>
    <slot v-else />
  </button>
</template>
<style lang="scss" scoped>
.copy-to-clipboard-btn {
  background: none;
  outline: none;
  border: 0;
  cursor: pointer;
}
</style>

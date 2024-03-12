<script setup lang="ts">
const emit = defineEmits(['click'])
const handleClick = (event: Event) => {
  emit('click', event)
}
</script>
<template>
  <button
    class="underlined-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<style scoped lang="scss">
.underlined-button {
  cursor: pointer;
  outline: none;
  padding: 0;
  border: 0 solid;
  background-color: transparent;
  text-decoration: underline;
  display: inline-block;
  color: $text-color--red;
  letter-spacing: -0.013em;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 16px;
  transition: all .4s;
  &:active {
    color: darken($text-color--red, 20%);
  }
}
</style>

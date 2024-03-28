<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '#',
  },

  textColor: {
    type: String,
    default: 'blue',
  },

  underline: {
    type: Boolean,
    default: false,
  },

  target: {
    type: String,
    default: '_blank',
  },
})
</script>
<template>
  <a
    :href="href"
    :target="target"
    rel="noopener"
    :class="`case-text-link text-color-${textColor} ${underline ? 'case-text-link--underline' : ''}`"
  >
    <slot />
  </a>
</template>
<style lang="scss" scoped>
.case-text-link {
  &--underline {
    text-decoration: underline;
  }
}
</style>

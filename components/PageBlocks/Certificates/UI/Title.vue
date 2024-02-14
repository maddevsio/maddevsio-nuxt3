<script setup lang="ts">
interface Props {
  title: string
  titleTag: string
}

withDefaults(defineProps<Props>(), {
  titleTag: 'h2',
})
</script>
<template>
  <Component
    :is="titleTag"
  >
    {{ title }}
  </Component>
</template>

<script setup lang="ts">
interface Props {
  link: string
  linkText: string
  tag: string
  redirectToUrl(tag: string, link: string): Promise<void>
}

const { tag, linkText, link } = defineProps<Props>()

const VNode = () => h(tag, { innerHTML: linkText, href: link })
</script>
<template>
  <VNode
    @click.prevent="redirectToUrl(tag, link)"
  />
</template>

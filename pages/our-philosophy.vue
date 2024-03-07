<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

// @ts-ignore
useHead(buildHead({
  ...getMetadata('ourPhilosophy'),
  image: 'https://maddevs.io/our-philosophy-banner.png',
}))
</script>
<template>
  <LazyPhilosophyMain />
</template>

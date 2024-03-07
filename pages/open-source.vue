<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

// @ts-ignore
useHead(buildHead({
  ...getMetadata('openSource'),
  image: 'https://maddevs.io/open-source.png',
}))
</script>
<template>
  <LazyOpenSourceMain />
</template>

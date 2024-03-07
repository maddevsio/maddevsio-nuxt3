<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

// @ts-ignore
useHead(buildHead({
  ...getMetadata('privacy'),
  image: 'https://maddevs.io/privacy-policy.png',
}))
</script>
<template>
  <LazyDataSecurityPrivacy />
</template>

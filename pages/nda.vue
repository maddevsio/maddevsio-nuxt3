<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

// @ts-ignore
useHead(buildHead(getMetadata('nda')))
</script>
<template>
  <LazyDataSecurityNDA />
</template>

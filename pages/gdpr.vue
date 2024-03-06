<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

// @ts-ignore
useHead(buildHead(getMetadata('gdpr')))
</script>
<template>
  <LazyDataSecurityGDPR />
</template>

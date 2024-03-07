<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

// @ts-ignore
useHead(buildHead({
  ...getMetadata('delivery-models'),
  image: 'https://maddevs.io/delivery-models.png',
}))
</script>
<template>
  <LazyDeliveryModelsMain />
</template>

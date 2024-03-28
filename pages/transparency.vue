<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

const { $getMediaFromS3 } = useMediaFromS3()
const config = useRuntimeConfig()

// @ts-ignore
useHead(buildHead({
  ...getMetadata('transparency'),
  image: $getMediaFromS3('images/transparency/png/transparency-meta.png'),
  url: `${ config.public.domain }/transparency/`,
}))
</script>

<template>
  <LazyTransparencyMain />
</template>

<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

const { $getMediaFromS3 } = useMediaFromS3()

// @ts-ignore
useHead(buildHead({
  ...getMetadata('digest'),
  image: $getMediaFromS3('images/Digest/png/og-image-digest.png'),
}))
</script>

<template>
  <DigestMainPage />
</template>

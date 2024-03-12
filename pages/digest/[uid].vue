<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const {
  digest,
  schemaOrgSnippet,
  openGraphUrl,
} = await useDigestContentData()

// @ts-ignore
useHead(buildHead({
  url: openGraphUrl || '',
  title: digest.metaTitle || '',
  description: digest.metaDescription || '',
  jsonLd: schemaOrgSnippet.value,
  image: digest?.ogImageUrl,
}))
</script>

<template>
  <DigestPostView
    :digest="digest"
  />
</template>

<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const {
  digest,
  schemaOrgSnippet,
  openGraphUrl,
} = await useDigestContentData()

if (schemaOrgSnippet.value) {
  useJsonld(() => schemaOrgSnippet.value.map((snippet: { type: string, innerHTML: string }) => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  url: openGraphUrl || '',
  title: digest.metaTitle || '',
  description: digest.metaDescription || '',
  image: digest?.ogImageUrl,
}))
</script>

<template>
  <DigestPostView
    :digest="digest"
  />
</template>

<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const {
  post,
} = await useBlogContentData('post')

const imageWithoutCrop = () => {
  return post.featuredImage?.url?.split('?auto')[0]
}

useClearStoresBeforeRouteLeave()

if (post.schemaOrgSnippet.value) {
  useJsonld(() => post.schemaOrgSnippet.value?.map((snippet: { type: string, innerHTML: string }) => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  title: post.metaTitle || '',
  metaTitle: post.metaTitle || '',
  description: post.metaDescription || '',
  url: post.openGraphUrl,
  image: imageWithoutCrop() ? imageWithoutCrop() : '/favicon.ico',
}))
</script>

<template>
  <div v-if="post">
    <BlogPostView
      :post-data="post"
    />
  </div>
</template>

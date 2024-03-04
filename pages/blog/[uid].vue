<script setup lang="ts">
import { buildHead } from '~/SEO/buildMetaTags'

const {
  post,
} = await useBlogContentData('post')

const imageWithoutCrop = () => {
  return post.featuredImage?.url?.split('?auto')[0]
}

// @ts-ignore
useHead(buildHead({
  title: post.metaTitle || '',
  metaTitle: post.metaTitle || '',
  description: post.metaDescription || '',
  url: post.openGraphUrl,
  jsonLd: post.schemaOrgSnippet.value,
  image: imageWithoutCrop() ? imageWithoutCrop() : '/favicon.ico',
}))
</script>

<template>
  <div v-if="post">
    <LazyBlogPostView
      :post-data="post"
    />
  </div>
</template>

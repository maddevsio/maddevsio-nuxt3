<script setup lang="ts">
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const { data: blogHome, error } = await useAsyncData('blogHome', async () => {
  try {
    const { data } = await prismic.client.getSingle('blog_home')
    return data
  } catch (e) {
    showError({ message: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

if (blogHome.value) {
  provide('blogHeaderBackgroundImage', blogHome.value.image)
  provide('tags', structuredTags(blogHome.value.categories, prismic))
}

// @ts-ignore
useHead(buildHead({
  ...getMetadata('blog', prismic.asText(blogHome.value!.headline), prismic.asText(blogHome.value!.description)),
  description: prismic.asText(blogHome.value!.description) || '',
  title: prismic.asText(blogHome.value!.headline) || 'Mad Devs: Software & Mobile App Development Company | Blog',
  image: 'https://maddevs.io/md-blog.png',
}))
</script>
<template>
  <div class="blog-home">
    <LazyBlogMainPage />
  </div>
</template>

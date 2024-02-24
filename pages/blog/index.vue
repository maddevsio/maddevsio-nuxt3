<script setup lang="ts">

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
</script>
<template>
  <main class="blog-home">
    <LazyBlogMainPage />
  </main>
</template>

<script setup lang="ts">
import { AuthorService } from '~/components/Blog/classes/AuthorService'
import { buildHead } from '~/SEO/buildMetaTags'
import type { Author, TransformedAuthor } from '~/interfaces/common/commonInterfaces'

interface ContentCount {
  posts: number,
  writeups: number,
  words: number,
}

const prismic = usePrismic()
const route = useRoute()
const config = useRuntimeConfig()
const authorService = new AuthorService(prismic, config.public.ffEnvironment)
const contentCount = ref<ContentCount>()
const handleContentCount = (contentCountData: { posts: number, writeups: number, words: number }) => {
  contentCount.value = contentCountData
}

const { data: authorData, error } = await useAsyncData('authorData', async () => {
  try {
    const response = await authorService.getAuthor(route.params.uid as string)
    return extractAuthorData(response as unknown as Author) as TransformedAuthor
  } catch {
    showError({ statusMessage: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusMessage: 'Page not found', statusCode: 404 })
}

useClearStoresBeforeRouteLeave()

if (authorData.value!.schemaOrgSnippet) {
  useJsonld(() => authorData.value!.schemaOrgSnippet.map((snippet: any) => JSON.parse(JSON.parse(
    JSON.stringify(snippet!.innerHTML
      .replace(/\r?\n|\r/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/,(\s*)$/, '$1')),
  ))))
}

// @ts-ignore
useHead(buildHead({
  title: authorData.value?.metaTitle || `${ authorData.value?.name } | Blog`,
  metaTitle: authorData.value?.metaTitle || `${ authorData.value?.name } | Blog`,
  description: authorData.value?.metaDescription || '',
  url: `${ config.public.domain }/blog/authors/${ route.params.uid }/`,
  image: 'https://maddevs.io/md-blog.png',
  noindex: authorData.value?.noindex,
}))
</script>
<template>
  <div class="author">
    <LazyBlogAuthorBanner
      v-if="authorData"
      :author-name="authorData.name"
      :author-position="authorData.position"
      :author-image="authorData.image"
      :author-description="authorData.description"
      :content-count="contentCount"
    />
    <LazyBlogAuthorRichDescription
      v-if="authorData && $prismic.asText(authorData.richDescription)"
      :rich-description="authorData.richDescription"
    />
    <LazyBlogAuthorContent
      :author="authorData"
      @content-count="handleContentCount"
    />
  </div>
</template>

<style scoped lang="scss">
.author {
  padding-top: 62px;
}
</style>

<script setup lang="ts">
import { TagService } from '~/components/Tags/classes/TagService'
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'

const route = useRoute()
const prismic = usePrismic()
const config = useRuntimeConfig()
const tagService = new TagService(prismic, config.public.ffEnvironment)
const openGraphUrl = `${ config.public.domain }/tag/${ route.params.uid }/`

const { data: tagsData, error } = await useAsyncData('tagsData', async () => {
  try {
    const response = await tagService.getTags()
    // @ts-ignore
    const tag = tagService.getTag(response[0].data.tags, route.params.uid as string)
    const currentTag = tag === 'Software Development' ? 'Software Development ' : tag
    const posts = extractPostInfo(await tagService.getPostsByTag(currentTag), prismic)

    return {
      postsCount: posts.length,
      posts,
      currentTag,
    }
  } catch {
    showError({ statusMessage: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusMessage: 'Page not found', statusCode: 404 })
}

const metaData = getMetadata(route.params.uid as string)
// @ts-ignore
useHead(buildHead({
  title: metaData.title || `Top articles about ${ tagsData.value?.currentTag } | Mad Devs Blog`,
  metaTitle: metaData.title || `Top articles about ${ tagsData.value?.currentTag } | Mad Devs Blog`,
  description: metaData.description || `Discover articles about ${ tagsData.value?.currentTag }. Quality content curated by Mad Devs.`,
  url: openGraphUrl,
  image: 'https://maddevs.io/md-blog.png',
}))
</script>

<template>
  <div class="tag">
    <LazyTagsBanner
      v-if="tagsData"
      :title="tagsData.currentTag"
      :count="tagsData.postsCount"
    />
    <LazyTagsPosts
      v-if="tagsData"
      :posts="tagsData.posts"
      :tag="tagsData.currentTag"
    />
  </div>
</template>
<style lang="scss" scoped>
.tag {
  padding-top: 62px;
}
</style>

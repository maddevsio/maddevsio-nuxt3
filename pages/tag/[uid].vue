<script setup lang="ts">
import { TagService } from '~/components/Tags/classes/TagService'
import { buildHead, getMetadata } from '~/SEO/buildMetaTags'
import type { GlossaryWord } from '~/components/Glossary/interfaces/IGlossaryNewestWords'

const route = useRoute()
const prismic = usePrismic()
const config = useRuntimeConfig()
const tagService = new TagService(prismic, config.public.ffEnvironment)
const openGraphUrl = `${ config.public.domain }/tag/${ route.params.uid }/`
const tagPosts = ref([])
const tagWords = ref<GlossaryWord[] | never[]>([])
const isLoading = ref(true)

const { data: tagsData, error } = await useAsyncData('tagsData', async () => {
  try {
    const response = await tagService.getTags()
    // @ts-ignore
    const tag = tagService.getTag(response[0].data.tags, route.params.uid as string)
    const currentTag = tag === 'Software Development' ? 'Software Development ' : tag

    return {
      currentTag,
    }
  } catch {
    showError({ statusMessage: 'Page not found', statusCode: 404 })
  }
})

if (error.value) {
  throw createError({ statusMessage: 'Page not found', statusCode: 404 })
}

onMounted(async() => {
  try {
    const [posts, words] = await Promise.all([
      tagService.getPostsByTag(tagsData.value?.currentTag as string),
      tagService.getWordsByTag(tagsData.value?.currentTag as string),
    ])

    tagPosts.value = extractPostInfo(posts, prismic)
    tagWords.value = transformGlossaryWords(words)
    isLoading.value = false
  } catch (e) {
    isLoading.value = false
  }
})

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
      :count="{posts: tagPosts.length, words: tagWords.length}"
    />
    <div class="tag__content">
      <LazySharedLoadersSpinnerLoader
        v-if="isLoading"
        color-theme="white"
        class="tag__loading"
      />
      <div v-else>
        <LazyTagsPosts
          v-if="tagsData && tagPosts.length"
          :posts="tagPosts"
          :tag="tagsData.currentTag"
        />
        <LazyTagsWords
          v-if="tagWords.length"
          :words="tagWords"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tag {
  padding-top: 62px;

  &__content {
    background-color: $bgcolor--white-primary;
    min-height: 700px;
    padding-top: 60px;
  }
}
</style>

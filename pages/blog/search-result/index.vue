<script setup lang="ts">
import { BlogService } from '~/components/Blog/classes/BlogService'
import { buildHead } from '~/SEO/buildMetaTags'

const prismic = usePrismic()
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const posts = ref<any[]>([])

const blogService = new BlogService({ ffEnvironment: config.public.ffEnvironment })

const transformPost = (posts: any) => {
  return posts.map((postItem: any) => {
    if (!postItem && !postItem.data && !postItem.uid) { return null }
    return {
      ...postItem,
      uid: postItem.uid,
      articleLink: linkResolver({ type: postItem.type, uid: postItem.uid }),
      title: postItem.data.title[0].text,
      description: getFirstParagraph(postItem.data.body, 0),
      tag: postItem.tags[0],
      formattedDate: formatDate(postItem.data.date),
      readTime: calculateReadTime(postItem, prismic).readTime,
      cover: postItem.data.featured_image,
      author: extractAuthorData(postItem.data.post_author),
    }
  }).filter(Boolean)
}

const getSearchingArticles = async (query: string) => {
  const [resultPost, resultCU] = await Promise.all([
    blogService.getPostsFromPrismic(prismic, 'post', query),
    blogService.getPostsFromPrismic(prismic, 'customer_university', query),
  ])
  // @ts-ignore
  posts.value = transformPost([...resultPost, ...resultCU].sort((a, b) => new Date(b.data.date) - new Date(a.data.date)))
}

onMounted(async () => {
  const searchValue = route.query?.searchBy
  if (!searchValue) {
    await router.push('/blog/')
  } else {
    await getSearchingArticles(searchValue as string)
  }
})

// @ts-ignore
useHead(buildHead({
  title: 'Mad Devs: Blog search result',
  metaTitle: 'Blog',
  description: 'Page for search result',
  url: 'https://maddevs.io/blog/search-result/?searchBy=Mad/',
  image: 'https://maddevs.io/md-blog.png',
}))
</script>
<template>
  <section class="search-result">
    <BlogSearchResultBanner />
    <BlogSearchResultPosts
      :posts="posts"
    />
  </section>
</template>
<style lang="scss" scoped>
.search-result {
  padding-top: 62px;
}
</style>

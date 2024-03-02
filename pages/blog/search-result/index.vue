<script setup lang="ts">
import { BlogService } from '~/components/Blog/classes/BlogService'

const prismic = usePrismic()
const route = useRoute()
const router = useRouter()
const posts = ref<any[]>([])

const blogService = new BlogService()

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
</script>
<template>
  <section class="search-result">
    <LazyBlogSearchResultBanner />
    <LazyBlogSearchResultPosts
      :posts="posts"
    />
  </section>
</template>
<style lang="scss" scoped>
.search-result {
  padding-top: 62px;
}
</style>

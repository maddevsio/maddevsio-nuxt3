import type { BlogPost, SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'
import { BlogService } from '~/components/Blog/classes/BlogService'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { CuMasterDocument } from '~/prismicio-types'

export const useBlogContentData = async (type: 'post' | 'customer_university' = 'post') => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const prismic = usePrismic()
  const blogService = new BlogService({
    ffEnvironment: config.public.ffEnvironment,
  })

  const schemaOrgSnippet = ref<any>()
  const post = ref<BlogPost>()
  const readTime = ref('')

  const openGraphUrl = `${ config.public.domain }/${ type === 'customer_university' ? 'customer-university' : 'blog' }/${ route.params?.uid }/`

  const { data: blogContentResponseData, error } = await useAsyncData('blogContentResponseData', async () => {
    try {
      const postResponse = await blogService.getPostByUID(prismic, route.params.uid as string, type) as BlogPost

      if (postResponse.data?.released === false && config.public.ffEnvironment === 'production') {
        showError({ message: 'Page not found', statusCode: 404 })
      }

      if (type === 'post') {
        const recommendedPosts = await blogService.fetchPostsByTag(prismic, [postResponse.tags[0]], 4)
        postResponse.recommendedPosts = recommendedPosts.results
          .filter((recommendedPost: any) => recommendedPost.uid !== postResponse.uid && Boolean(recommendedPost.data?.post_author?.id))
          .slice(0, 3)
      }

      if (type === 'customer_university') {
        const cuMaster = await blogService.fetchCUMaster(prismic) as CuMasterDocument
        postResponse.clusterData = cuMaster.data.body
          .find(cluster => cluster.items
          // @ts-ignore
            .find(clusterItem => clusterItem.cu_post.id === postResponse.id) !== undefined) || null
        postResponse.clusterData.items = extractCUPost(postResponse.clusterData.items, prismic)
      }

      return postResponse
    } catch {
      showError({ statusMessage: 'Page not found', statusCode: 404 })
    }
  })

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

  post.value = blogContentResponseData.value as BlogPost

  if (type === 'post') {
    readTime.value = calculateReadTime(post.value, prismic).readTime
  }
  // Schema org snippet
  schemaOrgSnippet.value = extractSchemaOrg(post.value?.data?.schema_org_snippets as SchemaOrgSnippet[])

  return {
    post: {
      type: post.value.type,
      id: post.value.id,
      uid: post.value.uid,
      title: prismic.asText(post.value?.data?.title),
      subtitle: prismic.asText(post.value?.data?.subtitle),
      featuredImage: post.value?.data?.featured_image,
      recommendedPosts: post.value?.recommendedPosts,
      postAuthor: post.value?.data?.post_author,
      postCoAuthor: post.value?.data?.post_coauthor || null,
      tableOfContents: post.value?.data?.body?.find(slice => slice.slice_type === 'table_of_contents'),
      postForm: post.value?.data?.body?.find(slice => slice.slice_type === 'post_form'),
      slices: post.value?.data?.body?.filter(slice => slice.slice_type !== 'table_of_contents' && slice.slice_type !== 'post_form'),
      tags: post.value.tags,
      date: formatDate(post.value?.data?.date),
      updatedDate: post.value?.data?.updated_date ? formatDate(post.value?.data?.updated_date) : '',
      // @ts-ignore
      metaTitle: prismic.asText(post.value?.data?.meta_title) || post.value?.data?.title[0].text,
      metaDescription: prismic.asText(post.value?.data?.meta_description),
      withForm: post.value?.data?.post_with_form,
      readTime: readTime.value,
      openGraphUrl,
      schemaOrgSnippet,
      clusterData: post.value?.clusterData,
    },
    openGraphUrl,
    schemaOrgSnippet,
  }
}

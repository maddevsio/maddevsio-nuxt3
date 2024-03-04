import type { DigestPost, SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'
import { DigestAPI } from '~/components/Digest/classes/DigestAPI'
import type { DigestResponse } from '~/components/Digest/interfaces/IDigests'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'

export const useDigestContentData = async() => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const prismic = usePrismic()

  const schemaOrgSnippet = ref<any>()
  const digest = ref<DigestPost>()
  const digestAPI = new DigestAPI()
  const openGraphUrl = `${ config.public.domain }/digest/${ route.params?.uid }/`
  const { data: digestContentResponseData } = await useAsyncData(`digest-${ route.params?.uid }`, async () => {
    try {
      const digestPost = await digestAPI.getDigestPost(prismic, route.params.uid as string) as DigestPost

      const digestsResponse = await digestAPI.getAllDigests(prismic) as DigestResponse

      digestPost.digestsList = digestsResponse.results.map(digestItem => digestItem.uid)

      digestPost.data.body = digestPost.data.body.map(slice => {
        if (slice.slice_type === 'digest_post_card') {
          if (slice.primary.post) {
            const { readTime } = calculateReadTime(slice.primary?.post, prismic)
            slice.primary.readTime = readTime
          }
        }
        return slice
      })

      return digestPost
    } catch (e) {
      showError({ message: 'Page not found', statusCode: 404 })
    }
  })

  digest.value = digestContentResponseData.value as DigestPost
  schemaOrgSnippet.value = extractSchemaOrg(digest.value?.data?.schemaOrgSnippets as SchemaOrgSnippet[])

  return {
    openGraphUrl,
    schemaOrgSnippet,
    digest: {
      id: digest.value.id,
      uid: digest.value.uid,
      title: prismic.asText(digest.value.data.title),
      subtitle: prismic.asText(digest.value.data.subtitle),
      featuredImage: digest.value.data.featuredImage,
      tableOfContents: digest.value.data.body.find(slice => slice.slice_type === 'table_of_contents'),
      slices: digest.value.data.body,
      date: formatDate(digest.value.data.date),
      updatedDate: digest.value.data.updated_date ? formatDate(digest.value.data.updated_date) : '',
      metaTitle: prismic.asText(digest.value.data.metaTitle),
      metaDescription: prismic.asText(digest.value.data.metaDescription),
      digestsList: digest.value?.digestsList,
      openGraphUrl,
    },
  }
}

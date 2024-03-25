import type { DigestPost, SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'
import { DigestAPI } from '~/components/Digest/classes/DigestAPI'
import type { DigestResponse } from '~/components/Digest/interfaces/IDigests'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'

export const useDigestContentData = async() => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const prismic = usePrismic()

  const schemaOrgSnippet = ref<any>()
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

      digestPost.ogImageUrl = digestPost.data.featuredImage?.url?.split('?auto')[0]

      return digestPost
    } catch (e) {
      showError({ message: 'Page not found', statusCode: 404 })
    }
  })

  schemaOrgSnippet.value = extractSchemaOrg(digestContentResponseData.value?.data?.schemaOrgSnippets as SchemaOrgSnippet[])

  return {
    openGraphUrl,
    schemaOrgSnippet,
    digest: {
      id: digestContentResponseData.value?.id,
      uid: digestContentResponseData.value?.uid,
      title: prismic.asText(digestContentResponseData.value?.data.title),
      subtitle: prismic.asText(digestContentResponseData.value?.data.subtitle),
      featuredImage: digestContentResponseData.value?.data.featuredImage,
      tableOfContents: digestContentResponseData.value?.data.body.find(slice => slice.slice_type === 'table_of_contents'),
      slices: digestContentResponseData.value?.data.body.filter(slice => slice.slice_type !== 'table_of_contents'),
      date: formatDate(digestContentResponseData.value?.data.date),
      updatedDate: digestContentResponseData.value?.data.updated_date ? formatDate(digestContentResponseData.value.data.updated_date) : '',
      metaTitle: prismic.asText(digestContentResponseData.value?.data.metaTitle),
      metaDescription: prismic.asText(digestContentResponseData.value?.data.metaDescription),
      digestsList: digestContentResponseData.value?.digestsList,
      ogImageUrl: digestContentResponseData.value?.ogImageUrl,
      openGraphUrl,
    },
  }
}

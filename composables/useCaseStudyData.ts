import { getMetadata } from '~/SEO/buildMetaTags'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'

export const useCaseStudyData = async ({
  caseName = '',
  defaultOgImage = 'https://maddevs.io/Open-Graph.png',
}) => {
  const prismic = usePrismic()
  const config = useRuntimeConfig()

  const { data: caseStudyData, error } = await useAsyncData('caseStudyData', async () => {
    try {
      let caseStudyMeta = {}
      const toCamelCase = (str: string) => str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
      const convertItc = (str: string) => (str === 'r4tca-web-application' ? str.replace('r4tca', 'R4TCA') : str)
      const response = await prismic.client.getByUID('case-studies', caseName)
      if (response) {
        caseStudyMeta = {
          title: response?.data?.metaTitle || '',
          metaTitle: response?.data?.metaTitle || '',
          description: response?.data?.metaDescription || '',
          url: `${ config.public.domain }/case-studies/${ caseName === 'case-studies' ? '' : `${ convertItc(caseName) }/` }`,
          schemaOrg: extractSchemaOrg(response.data.schemaOrgSnippets as SchemaOrgSnippet[]),
          image: response.data.ogImage?.url?.split('?auto')[0] || defaultOgImage,
        }
      } else {
        caseStudyMeta = {
          ...getMetadata(toCamelCase(caseName)),
          image: defaultOgImage,
        }
      }

      return {
        caseStudyMeta,
      }
    } catch {
      showError({ statusMessage: 'Page not found', statusCode: 404 })
    }
  })

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

  return caseStudyData
}

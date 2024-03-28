import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { GlossaryPage, SchemaOrgSnippet, TransformedGlossaryPageData } from '~/interfaces/common/commonInterfaces'

export const extractGlossaryPageData = (glossaryPageData: GlossaryPage, domainName: string): TransformedGlossaryPageData => {
  try {
    const ogImageWithoutCrop = glossaryPageData?.data?.og_image?.url?.replace('compress,', '')
    return {
      uid: glossaryPageData?.uid,
      url: glossaryPageData?.uid === 'glossary' ? `${ domainName }/glossary/` : `${ domainName }/glossary/${ glossaryPageData?.uid }/`,
      metaTitle: glossaryPageData?.data?.meta_title,
      metaDescription: glossaryPageData?.data?.meta_description,
      ogImage: ogImageWithoutCrop || `${ process.env.domain }/Open-Graph.png`,
      schemaOrg: extractSchemaOrg(glossaryPageData?.data?.schema_org_snippets as SchemaOrgSnippet[]),
      released: glossaryPageData?.data?.released,
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e)
    throw new Error(e)
  }
}

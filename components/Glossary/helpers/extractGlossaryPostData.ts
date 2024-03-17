import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { GlossaryPost, SchemaOrgSnippet, TransformedGlossaryPost } from '~/interfaces/common/commonInterfaces'
export const extractGlossaryPostData = (glossaryPostData: GlossaryPost, domainName: string): TransformedGlossaryPost => {
  try {
    const ogImageWithoutCrop = glossaryPostData?.data?.og_image?.url?.replace('compress,', '')
    return {
      uid: glossaryPostData?.uid,
      url: glossaryPostData?.uid === 'glossary' ? `${ domainName }/glossary/` : `${ domainName }/glossary/${ glossaryPostData?.uid }/`,
      metaTitle: glossaryPostData?.data?.meta_title,
      metaDescription: glossaryPostData?.data?.meta_description,
      ogImage: ogImageWithoutCrop || `${ process.env.domain }/Open-Graph.png`,
      schemaOrg: extractSchemaOrg(glossaryPostData?.data?.schema_org_snippets as SchemaOrgSnippet[]),
      wordTitle: glossaryPostData?.data.word_title,
      wordPageTitle: glossaryPostData?.data.word_page_title,
      wordPageDescription: glossaryPostData?.data.word_page_description,
      slices: glossaryPostData?.data?.body.filter(slice => slice.slice_type !== 'table_of_contents'),
      tableOfContents: glossaryPostData?.data?.body.find(slice => slice.slice_type === 'table_of_contents'),
      createdDate: formatDate(glossaryPostData?.data?.created_date),
      updatedDate: glossaryPostData?.data?.updated_date ? formatDate(glossaryPostData?.data?.updated_date, true, true) : '',
      released: glossaryPostData?.data?.released,
      author: glossaryPostData?.data?.author,
      coAuthor: glossaryPostData?.data?.co_author,
      headerPlate: {
        text: glossaryPostData?.data?.header_plate_text,
        btnText: glossaryPostData?.data?.header_plate_button_text,
        btnLink: glossaryPostData?.data?.header_plate_link,
        backgroundColor: glossaryPostData?.data?.header_plate_background_color,
      },
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e)
    throw new Error(e)
  }
}

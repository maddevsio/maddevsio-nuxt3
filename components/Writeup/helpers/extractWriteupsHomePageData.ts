import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { WriteupDocument } from '~/prismicio-types'
import type { SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'

export const extractWriteupsHomePageData = (pageData: WriteupDocument) => {
  const ogImageWithoutCrop = pageData?.data?.og_image?.url?.replace('compress,', '')
  return {
    uid: pageData?.uid,
    url: `${ process.env.domain }/writeups/`,
    metaTitle: pageData?.data?.meta_title,
    metaDescription: pageData?.data?.meta_description,
    ogImage: ogImageWithoutCrop || 'https://maddevsio.s3.eu-west-1.amazonaws.com/images/writeups/webp/write-up-og.webp',
    schemaOrg: extractSchemaOrg(pageData?.data?.schema_org_snippets as SchemaOrgSnippet[]),
    slices: pageData?.data?.body.filter(slice => slice.slice_type !== 'tag_cloud_slice'),
    tagCloud: pageData?.data?.body.filter(slice => slice.slice_type === 'tag_cloud_slice'),
    released: pageData?.data?.released,
    title: pageData?.data?.title,
    description: pageData?.data?.description,
    image: pageData?.data?.image,
    headerPlate: pageData?.data?.header_plate_text
      ? {
        text: pageData?.data?.header_plate_text,
        btnText: pageData?.data?.header_plate_button_text,
        btnLink: pageData?.data?.header_plate_link,
        backgroundColor: pageData?.data?.header_plate_background_color,
      }
      : null,
  }
}

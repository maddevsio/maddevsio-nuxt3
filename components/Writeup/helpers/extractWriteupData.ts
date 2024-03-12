import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { SchemaOrgSnippet } from '~/interfaces/common/commonInterfaces'
import type { WriteupDocument } from '~/prismicio-types'

export const extractWriteupData = (writeupData: WriteupDocument) => {
  const ogImageWithoutCrop = writeupData?.data?.og_image?.url?.replace('compress,', '')
  // @ts-ignore
  return {
    uid: writeupData?.uid,
    metaTitle: writeupData?.data?.meta_title,
    metaDescription: writeupData?.data?.meta_description,
    url: `${ process.env.domain }/writeups/${ writeupData.uid }/`,
    ogImage: ogImageWithoutCrop || 'https://maddevsio.s3.eu-west-1.amazonaws.com/images/writeups/webp/write-up-og.webp',
    schemaOrg: extractSchemaOrg(writeupData?.data?.schema_org_snippets as SchemaOrgSnippet[]),
    slices: writeupData?.data?.body,
    released: writeupData?.data?.released,
    title: writeupData?.data?.title,
    createdDate: writeupData?.data?.created_date ? formatDate(writeupData.data.created_date) : '',
    updatedDate: writeupData?.data?.updated_date ? formatDate(writeupData.data?.updated_date) : '',
    tag: writeupData.tags.filter(tag => tag !== 'Writeup')[0],
    author: {
      // @ts-ignore
      name: writeupData?.data?.author?.data?.name,
      // @ts-ignore
      position: writeupData?.data?.author?.data?.position,
      // @ts-ignore
      uid: writeupData?.data?.author?.uid,
      // @ts-ignore
      image: writeupData?.data?.author?.data?.image,
    },
    headerPlate: {
      text: writeupData?.data?.header_plate_text,
      btnText: writeupData.data?.header_plate_button_text,
      btnLink: writeupData?.data?.header_plate_link,
      backgroundColor: writeupData?.data?.header_plate_background_color,
    },
  }
}

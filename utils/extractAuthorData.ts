import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { Author } from '~/interfaces/common/commonInterfaces'

export const extractAuthorData = (author: Author) => {
  if (!author.data) { return {} }

  const socialNetworks = author.data.social_networks
    .filter(item => item.network && item.link.url)
    .map(item => ({
      key: item.network.toLowerCase(),
      title: item.network,
      link: item.link,
    }))

  return {
    type: author.type,
    id: author.id,
    uid: author.uid,
    name: author.data.name,
    position: author.data.position,
    thumbnailImage: author.data.thumbnail_image,
    image: author.data.image,
    metaTitle: author.data.meta_title,
    metaDescription: author.data.meta_description,
    noindex: author.data.noindex,
    schemaOrgSnippet: extractSchemaOrg(author.data.schema_org_snippets),
    personalPageLink: linkResolver({ type: 'author', uid: author.uid }),
    headerPlate: {
      text: author.data?.header_plate_text,
      btnText: author.data?.header_plate_button_text,
      btnLink: author.data?.header_plate_link,
      backgroundColor: author.data?.header_plate_background_color,
    },
    socialNetworks,
  }
}

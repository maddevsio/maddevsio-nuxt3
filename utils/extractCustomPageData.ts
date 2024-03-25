import type { CustomPageDocument } from '~/prismicio-types'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { SchemaOrgSnippet, TransformedCustomType } from '~/interfaces/common/commonInterfaces'

export const getRoutePrefixClient = (routePrefix: string | undefined) => ((typeof routePrefix !== 'string' || !routePrefix)
  ? ''
  : routePrefix.replace(/^\/|\/$/g, ''))

export const extractCustomPageData = (page: CustomPageDocument): TransformedCustomType | {} => {
  if (!page) { return {} }
  return {
    id: page.id,
    uid: page.uid,
    routePrefix: getRoutePrefixClient(page.data?.route_prefix as string),
    released: page.data?.released,
    showFooter: page.data?.show_footer,
    slices: page.data?.body,
    metaTitle: page.data?.meta_title,
    metaDescription: page.data?.meta_description,
    ogImage: page.data?.og_image?.url,
    schemaOrgSnippet: extractSchemaOrg(page.data?.schema_org_snippets as SchemaOrgSnippet[]),
    emailSubject: page.data?.emailSubject,
  }
}

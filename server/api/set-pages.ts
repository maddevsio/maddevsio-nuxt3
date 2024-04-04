import { Client } from '@prismicio/client'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import { getRoutePrefixClient } from '~/utils/extractCustomPageData'
import { fetchLinks } from '~/config/constants'
import { Page } from '~/server/models/Page.model'

export default defineEventHandler(async () => {
  const client = new Client('superpupertest')
  const getPages = async () => {
    return await client.dangerouslyGetAll({
      fetchLinks,
      pageSize: 30,
    })
  }

  const extractCustomPageData = (pages: any): any => {
    if (!pages.length) { return [] }
    return pages.map((page: any) => ({
      id: page.id,
      uid: page.uid,
      routePrefix: getRoutePrefixClient(page.data?.route_prefix as string),
      released: page.data?.released,
      showFooter: page.data?.show_footer,
      slices: page.data?.body,
      metaTitle: page.data?.meta_title,
      metaDescription: page.data?.meta_description,
      ogImage: page.data?.og_image?.url,
      schemaOrgSnippet: extractSchemaOrg(page.data?.schema_org_snippets),
      emailSubject: page.data?.emailSubject,
    }))
  }
  const prismicPosts = await getPages()
  const customPages = extractCustomPageData(prismicPosts.filter(page => page.type === 'custom_page'))
  const header = prismicPosts.filter(header => header.type === 'header_for_local_dev')
  const filteredPages = [...customPages, ...header]
  try {
    await Page.destroy({
      truncate: true,
    })
    for (const page of filteredPages) {
      const customPage = {
        uid: page.uid || '',
        documentType: page.type,
        jsonData: JSON.stringify(page),
      }
      await Page.create(customPage)
    }
    const pages = await Page.findAll()
    return { pages }
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})

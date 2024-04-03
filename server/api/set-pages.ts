import { Client } from '@prismicio/client'
import { eq } from 'drizzle-orm'
import { db } from './sqlite-service'
import { InsertPages, pages } from '~/db/schema'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import { getRoutePrefixClient } from '~/utils/extractCustomPageData'
import { fetchLinks } from '~/config/constants'

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
  try {
    customPages.forEach((page: any) => {
      const customPage: InsertPages = {
        uid: page.uid,
        jsonData: JSON.stringify(page),
      }
      db.delete(pages).where(eq(pages.uid, page.uid)).run()
      db.insert(pages).values(customPage).run();
    })
    const usersResp = db.select().from(pages).all()
    return { pages: usersResp }
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})

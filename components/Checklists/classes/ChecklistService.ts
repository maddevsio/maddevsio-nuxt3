import type { PrismicPlugin } from '@prismicio/vue'
import type { Query } from '@prismicio/client'
import { fetchLinks } from '~/config/constants'
import { extractSchemaOrg } from '~/SEO/extractSchemaOrg'
import type { SchemaOrgSnippet, TransformedChecklist } from '~/interfaces/common/commonInterfaces'
import type { ChecklistsDocument } from '~/prismicio-types'

export class ChecklistService {
  prismic: PrismicPlugin
  domain: string

  constructor(prismic: PrismicPlugin, domain: string) {
    this.prismic = prismic
    this.domain = domain
  }

  async getChecklistsPageContent(uid: string) {
    return await this.prismic.client.getByUID('checklists', uid, { fetchLinks })
  }

  extractChecklistMainPageData(pageData: ChecklistsDocument): TransformedChecklist {
    try {
      const ogImageWithoutCrop = pageData?.data?.og_image?.url?.replace('compress,', '')
      return {
        uid: pageData?.uid,
        url: pageData?.uid === 'checklists' ? `${ this.domain }/checklists/` : `${ this.domain }/checklists/${ pageData?.uid }/`,
        metaTitle: pageData?.data?.meta_title,
        metaDescription: pageData?.data?.meta_description,
        ogImage: ogImageWithoutCrop || `${ process.env.domain }/Open-Graph.png`,
        schemaOrg: extractSchemaOrg(pageData?.data?.schema_org_snippets as SchemaOrgSnippet[]),
        slices: pageData?.data?.body.filter(slice => slice.slice_type !== 'tag_cloud_slice'),
        tagCloud: pageData?.data?.body.filter(slice => slice.slice_type === 'tag_cloud_slice'),
        released: pageData?.data?.released,
        title: pageData?.data?.title,
        description: pageData?.data?.description,
        image: pageData?.data?.background_image,
        headerPlate: pageData?.data?.header_plate_text
          ? {
            text: pageData?.data?.header_plate_text,
            btnText: pageData?.data?.header_plate_button_text,
            btnLink: pageData?.data?.header_plate_link,
            backgroundColor: pageData?.data?.header_plate_background_color,
          }
          : null,
      }
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.log(e)
      throw new Error(e)
    }
  }

  async getChecklistsPages({
    tags = ['Checklist'],
    pageSize = 4,
    page = 1,
    ffEnvironment,
  }: {
    tags: string[]
    pageSize: number
    page: number
    ffEnvironment: string
  }): Promise<Query<ChecklistsDocument>> {
    try {
      return await this.prismic.client.get({
        filters: [
          this.prismic.filter.any('document.type', ['checklists']),
          this.prismic.filter.any('document.tags', tags),
          ffEnvironment === 'production' ? this.prismic.filter.at('my.checklists.released', true) : '',
        ].filter(Boolean),
        orderings: {
          field: 'my.checklists.publish_date',
          direction: 'desc',
        },
        page,
        pageSize,
      })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async loadChecklistsPagesData(pageSize = 4, route: any, ffEnvironment: string) {
    const checkedTag = checkTagCloudName(route.query.tag)
    let allChecklists
    if ('checklistPage' in route.query && !('tag' in route.query)) {
      allChecklists = await this.getChecklistsPages({
        tags: ['Checklist'],
        pageSize,
        page: Number(route.query.checklistPage),
        ffEnvironment,
      })
    }

    if ('checklistPage' in route.query && 'tag' in route.query) {
      allChecklists = await this.getChecklistsPages({
        tags: [checkedTag],
        pageSize,
        page: Number(route.query.checklistPage),
        ffEnvironment,
      })
    }

    if ('tag' in route.query && !('checklistPage' in route.query)) {
      allChecklists = await this.getChecklistsPages({
        tags: [checkedTag],
        pageSize,
        page: 1,
        ffEnvironment,
      })
    }

    if (!('tag' in route.query) && !('checklistPage' in route.query)) {
      allChecklists = await this.getChecklistsPages({
        tags: ['Checklist'],
        pageSize,
        page: 1,
        ffEnvironment,
      })
    }

    return allChecklists
  }

  transformChecklistDataForCards(checklists: Query<ChecklistsDocument>) {
    return checklists.results.length
      ? checklists.results.map(checklist => ({
        url: `/checklists/${ checklist.uid }/`,
        id: checklist.id,
        title: checklist.data.card_title || '',
        description: checklist.data.card_description || '',
        image: checklist.data.card_image || { url: '' },
        tag: checklist.tags.filter(tag => tag !== 'Checklist')[0],
        imageBackgroundColor: checklist.data.card_color_in_main_page || 'yellow',
      }))
      : []
  }
}

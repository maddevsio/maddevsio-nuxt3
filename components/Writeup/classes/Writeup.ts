import type { PrismicPlugin } from '@prismicio/vue'
import { transformationWriteupListData } from '~/components/Writeup/helpers/transformationWriteupListData'
import type { Writeups } from '~/components/Writeup/interfaces/IWriteupList'
import { fetchLinks } from '~/config/constants'
import { checkParametersForQuery } from '~/utils/checkParametersForQuery'

export class Writeup {
  ffEnvironment: string
  pageName = 'page'
  mainTagForQuery = 'Writeup'

  constructor(ffEnvironment: string) {
    this.ffEnvironment = ffEnvironment
  }

  async getWriteupPages(prismic: PrismicPlugin, tags: string[], pageSize = 5, page = 1) {
    return await prismic.client.get({
      filters: [
        prismic.filter.any('document.type', ['writeup']),
        prismic.filter.any('document.tags', tags.map(tag => tag.replace('Software Development', 'Software Development '))),
        this.ffEnvironment === 'production' ? prismic.filter.at('my.writeup.released', true) : '',
      ].filter(Boolean),
      orderings: {
        field: 'my.writeup.created_date',
        direction: 'desc',
      },
      fetchLinks: [
        'author.name',
        'author.position',
        'author.uid',
        'author.image',
      ],
      pageSize,
      page,
    })
  }

  async getWriteupsByTags(prismic: any, tagsValue: string[], pageSizeValue: number, page: number) {
    if (!tagsValue.length) { return }
    const allPagesData = await this.getWriteupPages(prismic, tagsValue, pageSizeValue, page) as Writeups

    if (!allPagesData) { return }
    return transformationWriteupListData(allPagesData)
  }

  async getWriteupPage(prismic: PrismicPlugin, uid: string) {
    return await prismic.client.getByUID('writeup', uid, { fetchLinks })
  }

  async loadWriteupPagesData(prismic: PrismicPlugin, pageSize = 5, route: any, allTag: string) {
    const queryParams = checkParametersForQuery(this.pageName, this.mainTagForQuery, route.query, allTag)
    const { tags, page } = queryParams
    return await this.getWriteupPages(prismic, tags, pageSize, page);
  }
}

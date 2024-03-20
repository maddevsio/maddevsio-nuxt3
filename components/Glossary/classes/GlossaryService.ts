import type { PrismicPlugin } from '@prismicio/vue'
import { fetchLinks } from '~/config/constants'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'
import type { IGlossaryService, QueryOrdering } from '~/components/Glossary/interfaces/IGlossaryService'

export class GlossaryService implements IGlossaryService {
  prismic: PrismicPlugin
  ffEnvironment: string

  constructor(prismic: PrismicPlugin, ffEnvironment: string) {
    this.prismic = prismic
    this.ffEnvironment = ffEnvironment

    this.getAllGlossaryPages = this.getAllGlossaryPages.bind(this)
    this.getGlossaryPages = this.getGlossaryPages.bind(this)
  }

  async getGlossaryPageContent(uid: string) {
    return await this.prismic.client.getByUID('glossary', uid, { fetchLinks })
  }

  async getGlossaryPages(
    pageSize = 11,
    page = 1,
    tag = ['Glossary'],
    orderings: QueryOrdering = { field: 'my.glossary.word_title', direction: 'desc' },
  ) {
    try {
      return await this.prismic.client.get({
        filters: [
          this.prismic.filter.any('document.type', ['glossary']),
          this.prismic.filter.any('document.tags', tag),
          this.ffEnvironment === 'production' ? this.prismic.filter.at('my.glossary.released', true) : '',
        ].filter(Boolean),
        orderings,
        page,
        pageSize,
      })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getAllGlossaryPages(page: number, tag: string[] = ['Glossary']) {
    try {
      let pages: GlossaryPage[] = []
      const response = await this.getGlossaryPages(100, page, tag)

      page++
      pages = pages.concat(response?.results as GlossaryPage[])
      if (response?.next_page) {
        pages = pages.concat(await this.getAllGlossaryPages(page, tag))
      }
      return pages
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async loadWordsBySearch (
    type: string,
    field: string,
    tags: string,
    queryValue: string,
    orderings: QueryOrdering = { field: 'my.glossary.word_title', direction: 'desc' }) {
    try {
      return await this.prismic.client.get({
        filters: [
          this.prismic.filter.any('document.type', [type]),
          this.prismic.filter.any('document.tags', [tags]),
          this.prismic.filter.fulltext(`my.${ type }.${ field }`, queryValue),
          this.ffEnvironment === 'production' ? this.prismic.filter.at('my.glossary.released', true) : '',
        ].filter(Boolean),
        orderings,
        pageSize: 100,
      })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getAllWordsBySearch(
    page: number = 1,
    type: string,
    field: string,
    tags: string,
    queryValue: string,
    orderings: QueryOrdering = { field: 'my.glossary.word_title', direction: 'desc' }) {
    try {
      let pages: GlossaryPage[] = []
      const response = await this.loadWordsBySearch(type, field, tags, queryValue, orderings)

      page++
      pages = pages.concat(response?.results as GlossaryPage[])
      if (response?.next_page) {
        pages = pages.concat(await this.getAllWordsBySearch(page, type, field, tags, queryValue, orderings))
      }
      return pages
    } catch (error: any) {
      throw new Error(error)
    }
  }
}

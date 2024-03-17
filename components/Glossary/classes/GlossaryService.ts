import type { PrismicPlugin } from '@prismicio/vue'
import type { Ordering } from '@prismicio/client'
import { fetchLinks } from '~/config/constants'
import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'

export class GlossaryService {
  prismic: PrismicPlugin
  ffEnvironment: string

  constructor(prismic: PrismicPlugin, ffEnvironment: string) {
    this.prismic = prismic
    this.ffEnvironment = ffEnvironment

    this.getAllGlossaryPages = this.getAllGlossaryPages.bind(this)
    this.getGlossaryPages = this.getGlossaryPages.bind(this)
  }

  async getGlossaryPostContent(uid: string) {
    return await this.prismic.client.getByUID('glossary', uid, { fetchLinks })
  }

  async getGlossaryPages(
    pageSize = 11,
    page = 1,
    tag = ['Glossary'],
    orderings: string | Ordering | (string | Ordering)[] | undefined = { field: 'my.glossary.word_title', direction: 'desc' },
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

  async getAllGlossaryPages(page: number) {
    let pages: GlossaryPost[] = []
    const response = await this.getGlossaryPages(100, page)

    page++
    pages = pages.concat(response?.results as GlossaryPost[])
    if (response?.next_page) {
      pages = pages.concat(await this.getAllGlossaryPages(page))
    }

    return pages
  }
}

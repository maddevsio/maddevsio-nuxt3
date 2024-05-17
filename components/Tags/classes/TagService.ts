import type { PrismicPlugin } from '@prismicio/vue'
import type { Query } from '@prismicio/client'
import { fetchLinks } from '~/config/constants'
import type { CustomerUniversityDocument, GlossaryDocument, PostDocument } from '~/prismicio-types'

export class TagService {
  prismic: PrismicPlugin
  ffEnvironment: string

  constructor(prismic: PrismicPlugin, ffEnvironment: string) {
    this.prismic = prismic
    this.ffEnvironment = ffEnvironment
  }

  async getTags() {
    const { results } = await this.prismic.client.get({
      filters: [
        this.prismic.filter.at('document.type', 'tags'),
      ],
      orderings: {
        field: 'my.post.date',
        direction: 'desc',
      },
      pageSize: 100,
    })

    return results
  }

  async getPostsByTag(tag: string, currentPage = 1) {
    const response: Query<PostDocument | CustomerUniversityDocument> = await this.prismic.client.get({
      filters: [
        this.prismic.filter.any('document.type', ['post', 'customer_university']),
        this.prismic.filter.any('document.tags', [tag]),
        this.ffEnvironment === 'production' ? this.prismic.filter.not('my.post.released', false) : '',
        this.ffEnvironment === 'production' ? this.prismic.filter.not('my.customer_university.released', false) : '',
      ],
      orderings: {
        field: 'my.post.date',
        direction: 'desc',
      },
      pageSize: 100,
      page: currentPage,
      fetchLinks,
    })
    const currentPosts = response.results
    if (!response.next_page) {
      return currentPosts
    }
    const nextPage = currentPage + 1
    const nextPosts: any = await this.getPostsByTag(tag, nextPage)
    return [...currentPosts, ...nextPosts]
  }

  async getWordsByTag(tag: string, currentPage = 1) {
    const response: Query<GlossaryDocument> = await this.prismic.client.get({
      filters: [
        this.prismic.filter.any('document.type', ['glossary']),
        this.prismic.filter.any('document.tags', [tag]),
      ],
      orderings: {
        field: 'my.glossary.date',
        direction: 'desc',
      },
      pageSize: 100,
      page: currentPage,
      fetchLinks,
    })
    const currentWords = response.results
    if (!response.next_page) {
      return currentWords
    }
    const nextPage = currentPage + 1
    const nextWords: any = await this.getWordsByTag(tag, nextPage)
    return [...currentWords, ...nextWords]
  }

  getTag(tags: { tag_name: string }[], uid: string) {
    const tag = tags.find(tag => convertStringToSlug(tag.tag_name) === uid)
    if (tag) {
      return tag.tag_name
    } else {
      throw new Error('Tag not found')
    }
  }
}

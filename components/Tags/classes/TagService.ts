import type { PrismicPlugin } from '@prismicio/vue'
import type { Query } from '@prismicio/client'
import { fetchLinks } from '~/config/constants'
import type { CustomerUniversityDocument, PostDocument } from '~/prismicio-types'

export class TagService {
  prismic: PrismicPlugin

  constructor(prismic: PrismicPlugin) {
    this.prismic = prismic
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

  getTag(tags: { tag_name: string }[], uid: string) {
    const tag = tags.find(tag => convertStringToSlug(tag.tag_name) === uid)
    if (tag) {
      return tag.tag_name
    } else {
      throw new Error('Tag not found')
    }
  }
}

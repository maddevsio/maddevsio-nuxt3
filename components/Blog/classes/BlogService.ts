import type { PrismicPlugin } from '@prismicio/vue'
import { fetchLinks } from '~/config/constants'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'
import type { CuMasterDocument } from '~/prismicio-types'

export interface PostResponse {
  total_results_size: number,
  next_page: string
  prev_page: string
  results: BlogPost[]
  total_pages: number
}

interface BlogServiceConfig {
  ffEnvironment: string
}

export class BlogService {
  ffEnvironment: string

  constructor(config: BlogServiceConfig) {
    this.ffEnvironment = config.ffEnvironment
  }

  async getFeaturePost(prismic: PrismicPlugin) {
    try {
      const response = await prismic.client.get({
        filters: [
          prismic.filter.at('document.type', 'post'),
          prismic.filter.any('document.tags', ['Featured post']),
          this.ffEnvironment === 'production' ? prismic.filter.not('my.post.released', false) : '',
        ].filter(Boolean),
        orderings: {
          field: 'my.post.date',
          direction: 'desc',
        },
        pageSize: 1,
        fetchLinks,
      })
      return response.results[0]
    } catch (error) {
      return error
    }
  }

  async getPostsByTag(prismic: PrismicPlugin, tags: string[], page = 1): Promise<PostResponse | Error> {
    try {
      return await prismic.client.get({
        filters: [
          prismic.filter.any('document.type', ['post', 'customer_university']),
          prismic.filter.any('document.tags', tags),
          this.ffEnvironment === 'production' ? prismic.filter.not('my.post.released', false) : '',
          this.ffEnvironment === 'production' ? prismic.filter.not('my.customer_university.released', false) : '',
        ].filter(Boolean),
        orderings: {
          field: 'my.post.date',
          direction: 'desc',
        },
        pageSize: 6,
        page,
        fetchLinks,
      }) as PostResponse
    } catch (error) {
      return error as ReturnType<typeof Error>
    }
  }

  async getCUSection(prismic: PrismicPlugin) {
    try {
      const { data } = await prismic.client.getSingle('cu_section', {
        fetchLinks: ['customer_university.featured_image'],
      })
      return data.body
    } catch (e) {
      return e as ReturnType<typeof Error>
    }
  }

  async getPostByUID(prismic: PrismicPlugin, uid: string, type: 'post' | 'customer_university') {
    try {
      return await prismic.client.getByUID(type, uid, {
        fetchLinks,
      })
    } catch (e: any) {
      return e
    }
  }

  async fetchPostsByTag(prismic: PrismicPlugin, tags: string[], pageSize: number) {
    try {
      return await prismic.client.get({
        filters: [
          prismic.filter.at('document.type', 'post'),
          prismic.filter.at('document.tags', tags),
          this.ffEnvironment === 'production' ? prismic.filter.not('my.post.released', false) : '',
        ].filter(Boolean),
        pageSize,
        fetchLinks,
      })
    } catch (e: any) {
      return e
    }
  }

  async fetchCUMaster(prismic: PrismicPlugin) {
    try {
      return await prismic.client.getSingle('cu_master', { fetchLinks }) as CuMasterDocument
    } catch (e) {
      return e
    }
  }

  async getPostsFromPrismic(prismic: PrismicPlugin, type: 'post' | 'customer_university', query: string) {
    const { results } = await prismic.client.get({
      filters: [
        prismic.filter.any('document.type', [type]),
        prismic.filter.fulltext(`my.${ type }.title`, query),
        this.ffEnvironment === 'production' ? prismic.filter.not(`my.${ type }.released`, false) : '',
      ].filter(Boolean),
      fetchLinks,
    })
    return results
  }
}

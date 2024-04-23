import type { PrismicPlugin } from '@prismicio/vue'
import { fetchLinks } from '~/config/constants'
import type { GlossaryDocument, PostDocument, WriteupDocument } from '~/prismicio-types'
import type { TransformedWriteup, Writeup } from '~/components/Writeup/interfaces/IWriteupList'
import { transformationWriteupItems } from '~/components/Writeup/helpers/transformationWriteupItems'

export type ResponseContent = PostDocument | WriteupDocument | GlossaryDocument

export class AuthorService {
  prismic: PrismicPlugin
  ffEnvironment: string

  contentTypesForCheck = ['writeup', 'glossary']
  constructor(prismic: PrismicPlugin, ffEnvironment: string) {
    this.prismic = prismic
    this.ffEnvironment = ffEnvironment
  }

  async getAuthor(uid: string) {
    return await this.prismic.client.getByUID('author', uid)
  }

  async getAllAuthorContent(contentType: string, whatAuthor: string, authorID: string, page: number) {
    let pages: ResponseContent[] = []
    const response = await this.prismic.client.get<ResponseContent>({
      filters: [
        this.prismic.filter.at('document.type', contentType),
        this.prismic.filter.at(`my.${ contentType }.${ whatAuthor }`, authorID),
        this.ffEnvironment === 'production' ? this.prismic.filter.not(`my.${ contentType }.released`, false) : '',
      ],
      orderings: {
        field: `my.${ contentType }.date`,
        direction: 'desc',
      },
      fetchLinks,
      pageSize: 100,
      page,
    })

    page++
    pages = pages.concat(response.results)
    if (response.next_page) {
      pages = pages.concat(await this.getAllAuthorContent(contentType, whatAuthor, authorID, page))
    }

    return pages
  }

  async getAuthorPosts(authorID: string, page: number) {
    const response = await this.getAllAuthorContent('post', 'post_author', authorID, page)
    const responseCoAuthor = await this.getAllAuthorContent('post', 'post_coauthor', authorID, page)

    return extractPostInfo(Array.from(new Set(response.concat(responseCoAuthor)))
    // @ts-ignore
      .sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date)).filter(Boolean), this.prismic)
  }

  async getAuthorWriteups(authorID: string, page: number) {
    return this.extractWriteupData(await this.getAllAuthorContent('writeup', 'author', authorID, page) as any)
  }

  async getAuthorWords(authorID: string, page: number) {
    return transformGlossaryWords(await this.getAllAuthorContent('glossary', 'author', authorID, page))
  }

  extractAuthorTags(tagsArray: { name: string }[], pages: any[]) {
    const tagsToIgnore = ['Featured post', 'Editors pick', 'Python', 'Writeup', 'Glossary']
    const newTags = Array.from(new Set(pages.flatMap(post => post?.tags)))
      .filter(tag => !tagsToIgnore.includes(tag))
      .filter(tag => !tag.includes('Words'))
      .map(tag => ({ name: tag === 'Software Development' ? 'Software Development ' : tag }))

    const combinedTags = [...tagsArray, ...newTags] as { name: string }[]

    return combinedTags.reduce((accumulator: { name: string }[], currentTag) => {
      const isDuplicate = accumulator.some(tag => tag.name === currentTag.name)
      if (!isDuplicate) {
        accumulator.push(currentTag)
      }
      return accumulator
    }, [])
  }

  extractWriteupData(writeups: Writeup[]): TransformedWriteup[] {
    return transformationWriteupItems(writeups)
  }
}

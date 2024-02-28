import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { IPostView, PostComponents, PostViewProps } from '~/components/Blog/interfaces/Post/IPostView'
import type { Ebook } from '~/interfaces/common/commonInterfaces'

export class PostView implements IPostView {
  tags: string[]
  postType: string
  postComponents: PostComponents
  ebooks: Ref<Ebook[]>
  ebook: Ref<Ebook | undefined>
  id: string

  constructor({
    postType,
    tags,
    postComponents,
    id,
  }: PostViewProps) {
    this.tags = tags
    this.postType = postType
    this.postComponents = postComponents
    this.ebooks = ref([])
    this.ebook = ref()
    this.id = id

    this.getEbooksFromPrismic = this.getEbooksFromPrismic.bind(this)
    this.sortEbooksByPublicationDate = this.sortEbooksByPublicationDate.bind(this)
    this.selectRandomEbook = this.selectRandomEbook.bind(this)
    this.takeRandomEbook = this.takeRandomEbook.bind(this)

    markRaw(this)
  }

  async getEbooksFromPrismic(prismic: PrismicPlugin) {
    try {
      const { results } = await prismic.client.get(
        {
          filters: [
            prismic.filter.at('document.tags', ['Ebooks']),
          ],
          orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
          },
          pageSize: 100,
        },
      )
      // @ts-ignore
      this.ebooks.value = results
        .filter(ebookItem => ebookItem.tags.some(tag => this.tags.includes(tag)))
      // @ts-ignore
        .filter(ebookItem => !ManageCookie.checkCookie(`sawModal_${ ebookItem.data.body[0].primary.sendPulseTemplateId }`))
    } catch (error) {
      return error
    }
  }

  sortEbooksByPublicationDate(ebooks: any[]) {
    // @ts-ignore
    return ebooks.sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date))
  }

  selectRandomEbook(ebooks: any[]) {
    return ebooks[Math.floor(Math.random() * ebooks.length)]
  }

  takeRandomEbook() {
    let randomEbook
    if (this.ebooks.value.length === 0) { return }
    if (this.ebooks.value.length === 1) {
      [randomEbook] = this.ebooks.value
    } else {
      const sortedEbooks = this.sortEbooksByPublicationDate(this.ebooks.value)
      const now = new Date()
      // @ts-ignore
      const maxDays = Math.ceil((now - new Date(sortedEbooks[0].first_publication_date)) / (1000 * 60 * 60 * 24))
      // @ts-ignore
      const lastNewestBooks = sortedEbooks.filter(book => now - new Date(book.first_publication_date) < maxDays * 24 * 60 * 60 * 1000)
      if (lastNewestBooks.length === 1) { [randomEbook] = lastNewestBooks }
      randomEbook = this.selectRandomEbook(lastNewestBooks)
    }

    const [ebookInfo] = randomEbook.data.body
    this.ebook.value = ebookInfo
  }
}

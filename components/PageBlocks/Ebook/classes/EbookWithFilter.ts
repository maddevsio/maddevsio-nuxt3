import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { Query } from '@prismicio/client'
import type { IEbookWithFilter, TransformedEbook } from '~/components/PageBlocks/Ebook/interfaces/IEbookWithFilter'
import type { CustomPageDocument } from '~/prismicio-types'

export class EbookWithFilter implements IEbookWithFilter {
  ebooksDefault: Ref<TransformedEbook[] | []>
  ebooks: Ref<TransformedEbook[] | []>
  page: Ref<number>
  ebookCategory: Ref<string>
  ebookCategories: Ref<string[]>
  ebooksTitle: Ref<HTMLElement | undefined>
  totalPages: number
  perPage: number
  prismic: PrismicPlugin

  constructor(prismic: PrismicPlugin) {
    this.ebooksDefault = ref([])
    this.ebooks = ref([])
    this.page = ref(1)
    this.ebookCategories = ref([])
    this.ebookCategory = ref('Ebooks')
    this.ebooksTitle = ref()
    this.totalPages = 0
    this.perPage = 6
    this.prismic = prismic

    this.getEbooks = this.getEbooks.bind(this)
    this.transformEbook = this.transformEbook.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  async getEbooks(prismic: PrismicPlugin) {
    const ebooks = await prismic.client.get({
      filters: [
        prismic.filter.at('document.tags', ['Ebooks']),
      ],
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
      pageSize: 100,
    }) as Query<CustomPageDocument>
    if (ebooks && ebooks.results) {
      this.ebookCategories.value = [...new Set(ebooks.results.map(ebook => ebook.tags).flat().filter(tag => tag !== 'Ebooks'))]
    }

    this.transformEbook(ebooks)
  }

  transformEbook(ebooks: Query<CustomPageDocument>) {
    this.ebooksDefault.value = ebooks.results.map(ebook => ({
      title: this.prismic.asText(ebook.data.body[0].primary.title)!,
      subtitle: textEllipsis(this.prismic.asText(ebook.data.body[0].primary.subtitle)!, {
        limit: 80,
        trimToSpace: false,
      }),
      image: ebook.data.body[0].primary.rightImage,
      link: ebook.uid,
      tags: ebook.tags,
    }))
    this.ebooks.value = this.ebooksDefault.value.slice((ebooks.page - 1) * this.perPage, ebooks.page * this.perPage)
    this.totalPages = Math.ceil(this.ebooksDefault.value.length / this.perPage)
    this.page.value = ebooks.page
    this.ebookCategory.value = 'Ebooks'
  }

  changeCategory(category: string) {
    const ebooks = this.ebooksDefault.value.filter(ebook => ebook.tags.includes(category))
    const changedCategory = {
      ebooks: ebooks.slice(0, 6),
      category,
      totalPages: Math.ceil(ebooks.length / this.perPage),
    }

    this.ebookCategory.value = changedCategory.category
    this.page.value = 1
    this.ebooks.value = changedCategory.ebooks
    this.totalPages = changedCategory.totalPages

    if (this.ebooksTitle.value) {
      this.ebooksTitle.value.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  changePage(page: number) {
    this.ebooks.value = this.ebooksDefault.value
      .filter(ebook => ebook.tags.includes(this.ebookCategory.value))
      .slice((page - 1) * this.perPage, page * this.perPage)

    this.page.value = page

    if (this.ebooksTitle.value) {
      this.ebooksTitle.value.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }
}

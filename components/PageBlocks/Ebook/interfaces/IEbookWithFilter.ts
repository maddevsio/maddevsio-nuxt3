import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { ImageField, Query } from '@prismicio/client'
import type { CustomPageDocument } from '~/prismicio-types'

export interface TransformedEbook {
  title: string
  subtitle: string
  image: ImageField
  link: string
  tags: string[]
}

export interface IEbookWithFilter {
  ebooksDefault: Ref<TransformedEbook[]>
  ebooks: Ref<TransformedEbook[] | []>
  page: Ref<number>
  ebookCategory: Ref<string>
  ebookCategories: Ref<string[]>
  ebooksTitle: Ref<HTMLElement | undefined>
  totalPages: number
  perPage: number
  prismic: PrismicPlugin
  getEbooks(prismic: PrismicPlugin): Promise<void>
  changeCategory(category: string): void
  changePage(page: number): void
  transformEbook(ebooks: Query<CustomPageDocument>): void
}

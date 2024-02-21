import type { ImageField } from '@prismicio/client'
import type { Author } from '~/interfaces/common/commonInterfaces'

export interface IHeaderMenuPost {
  uid: string
  type: string
  date: string
  tags: string[]
  title: string
  paragraph: string
  image: ImageField
  author: Author
  link: string
  postParagraph(slices: any[]): string
  getPostPath(): string
}

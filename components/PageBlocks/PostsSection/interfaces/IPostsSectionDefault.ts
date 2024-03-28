import type { ImageField } from '@prismicio/types'
import type { Author, ISwiperOptions } from '~/interfaces/common/commonInterfaces'

export interface IPostItem {
  uid: string
  articleLink: string
  title: string
  description: string
  author: Author
  tag: string[]
  formattedDate: string
  readTime: string
  length: number
  cover: ImageField
}

export interface PostsSectionDefaultProps {
  items: []
}

export interface IPostsSectionDefault {
  swiperOptions: ISwiperOptions
  triggerBreakpoint: number
  posts: IPostItem[]
}

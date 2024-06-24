import type { ImageField } from '@prismicio/types'
import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'

export interface Writeup {
  uid: string
  data: {
    created_date: string
    title: string
    author: {
      data: {
        name: string
        position: string
        uid: string
        image: ImageField
      }
    }
  }
  tags: string[]
}

export interface TransformedWriteup {
  uid: string
  date?: string
  title?: string
  tags: string[]
  author?: {
    name: string
    position: string
    uid: string
    image: ImageField
  }
}

export interface Writeups {
  results: Writeup[]
  total_pages: number
  next_page: string | null
  prev_page: string | null
}

export interface TransformedWriteups {
  writeupList: Writeup[]
  totalPages: number
  nextPage: string | null
  prevPage: string | null
}

export interface WriteupListProps {
  primary: {
    backgroundColor: string
  }
  items: {
    writeupTag: string
  }[]
}

export interface IWriteupList {
  sliceBackgroundColor?: string
  tags?: string[]
  writeups: Ref<TransformedWriteup[]>
  totalPages: Ref<number>
  nextPage: Ref<string | null>
  prevPage: Ref<string | null>
  writeupListRef?: Ref<HTMLElement & {$el: HTMLElement}| null>
  currentPage: Ref<number>
  pageSize: number
  prismic: PrismicPlugin
  getWriteups(page: number): Promise<void>
}

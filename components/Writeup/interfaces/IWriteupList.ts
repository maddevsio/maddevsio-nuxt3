import type { ImageField } from '@prismicio/types'
import type { Ref } from 'vue'
import type { Router } from 'vue-router'
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
  date: string
  title: string
  tags: string[]
  author: {
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

export interface WriteupListProps {
  primary: {
    backgroundColor: string
  }
  items: {
    writeupTag: string
  }[]
}

export interface IWriteupList {
  sliceBackgroundColor: string
  tags: string[]
  writeups: Ref<TransformedWriteup[]>
  totalPages: Ref<number>
  nextPage: Ref<string | null>
  prevPage: Ref<string | null>
  writeupListRef: Ref<any>
  currentPage: Ref<number>
  pageSize: number
  prismic: PrismicPlugin
  router: Router
  getWriteups(page: number): Promise<void>
  changePage(page: number): Promise<void>
}

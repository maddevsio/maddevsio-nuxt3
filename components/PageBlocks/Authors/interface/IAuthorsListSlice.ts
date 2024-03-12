import type { ImageField } from '@prismicio/client'
import type { PrismicPlugin } from '@prismicio/vue'
import type { Ref } from 'vue'
import type { AuthorDocument } from '~/prismicio-types'

export interface AuthorItem {
  data: {
    image: ImageField & {
      thumbnail: ImageField
    }
    name: string
    position: string
    uid: string
  }
  tags: string[]
  post_count?: number
  uid: string
}

export interface AuthorPost {
  data: {
    post_coauthor: {
      uid: string
      tags: string[]
    }
    post_author: {
      uid: string
      tags: string[]
    }
  }
  tags: string[]
}

export interface AuthorsListProps {
  primary: {
    background: string
  }
}

export interface IAuthorsList {
  authorsWithPostsData: Ref<AuthorItem[]>
  sliceBackground: string | null
  countOfShownAuthors: Ref<number>
  showButton: Ref<boolean>
  getAllAuthors(prismic: PrismicPlugin): Promise<AuthorDocument[] | ReturnType<typeof Error>>
  getAllPostsAuthors(prismic: PrismicPlugin, currentPageOffset: number): Promise<AuthorPost[] | ReturnType<typeof Error>>
  setAuthorsPostsData(authors: AuthorDocument[], posts: AuthorPost[]): AuthorItem[]
  showAllAuthors(): void
}

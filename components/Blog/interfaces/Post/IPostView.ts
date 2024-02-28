import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { IPostHeader } from '~/components/Blog/interfaces/Post/IPostHeader'
import type { IPostContent } from '~/components/Blog/interfaces/Post/IPostContent'
import type { IPostServiceContent } from '~/components/Blog/interfaces/Post/IPostServiceContent'
import type { IPostContentLocker } from '~/components/Blog/interfaces/Post/IPostContentLocker'

export interface PostComponents {
  postHeader: IPostHeader
  postContent: IPostContent
  postServiceContent: IPostServiceContent
  contentLocker: IPostContentLocker
}

export interface PostViewProps {
  postType: string
  tags: string[]
  postComponents: PostComponents
  id: string
}

export interface IPostView {
  tags: string[]
  postType: string
  postComponents: PostComponents
  ebooks: Ref<any[]>
  ebook: Ref<any>
  id: string
  getEbooksFromPrismic(prismic: PrismicPlugin): void
  sortEbooksByPublicationDate(ebooks: any[]): any[]
  selectRandomEbook(ebooks: any[]): any
  takeRandomEbook(): void
}

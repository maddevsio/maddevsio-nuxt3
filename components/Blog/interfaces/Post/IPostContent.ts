import type { IPostSidebar } from '~/components/Blog/interfaces/Post/IPostSidebar'
import type { Author, BlogPost, TableOfContent } from '~/interfaces/common/commonInterfaces'

export interface PostContentProps {
  slices: any[]
  type: string
  metaTitle: string
  openGraphUrl: string
  tableOfContents: TableOfContent
  postAuthor: Author
  postCoAuthor: Author | undefined
  recommendedPosts: BlogPost[]
  servicePost?: boolean
  exploreChapters?: any
}

export interface IPostContent {
  slices: any[]
  type: string
  postSidebar: IPostSidebar
  postAuthor: Author
  postCoAuthor: Author | undefined
  recommendedPosts: BlogPost[]
  servicePost: boolean
  exploreChapters: any
  mobilePoint: number
  openGraphUrl: string
  metaTitle: string
}

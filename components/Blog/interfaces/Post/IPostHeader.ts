import type { ImageField, RichTextField } from '@prismicio/client'
import type { IPostMetaInfo } from '~/components/Blog/interfaces/Post/IPostMetaInfo'
import type { ICuNavigation } from '~/components/Blog/interfaces/Post/ICuNavigation'
import type { Author } from '~/interfaces/common/commonInterfaces'

export interface PostHeaderProps {
  uid: string
  type: string
  title: RichTextField
  subtitle: RichTextField
  featuredImage: ImageField
  date: string
  readTime: string
  updatedDate: string
  postAuthor: Author
  postCoAuthor: Author | undefined
  tags: string[]
  clusterData: any
  servicePost: boolean
}

export interface IPostHeader {
  postMetaInfo: IPostMetaInfo
  cuNavigation: ICuNavigation
  postType: string
  title: RichTextField
  subtitle: RichTextField
  featuredImage: ImageField
  author: Author
  coAuthor: Author | undefined
  tags: string[]
  date: string
  readTime: string
  servicePost: boolean
  passData(dataType: string): string
  showTag(): boolean
}

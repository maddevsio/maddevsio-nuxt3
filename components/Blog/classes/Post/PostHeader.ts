import type { ImageField, RichTextField } from '@prismicio/client'
import type { IPostHeader, PostHeaderProps } from '~/components/Blog/interfaces/Post/IPostHeader'
import type { IPostMetaInfo } from '~/components/Blog/interfaces/Post/IPostMetaInfo'
import type { ICuNavigation } from '~/components/Blog/interfaces/Post/ICuNavigation'
import type { Author } from '~/interfaces/common/commonInterfaces'
import { PostMetaInfo } from '~/components/Blog/classes/Post/PostMetaInfo'
import { CuNavigation } from '~/components/Blog/classes/Post/CuNavigation'

export class PostHeader implements IPostHeader {
  postMetaInfo: IPostMetaInfo
  cuNavigation: ICuNavigation | null
  postType: string
  title: RichTextField
  subtitle: RichTextField
  featuredImage: ImageField
  author: Author
  coAuthor: Author | undefined
  tags: string[]
  date: string
  updatedDate: string
  readTime: string
  servicePost: boolean

  constructor({
    uid,
    type,
    title,
    subtitle,
    featuredImage,
    date,
    readTime,
    updatedDate,
    postAuthor,
    postCoAuthor,
    tags,
    clusterData,
    servicePost,
  }: PostHeaderProps) {
    this.postMetaInfo = new PostMetaInfo(
      date,
      readTime,
      updatedDate,
    )
    this.cuNavigation = clusterData ? new CuNavigation({ uid, clusterData }) : null
    this.postType = type
    this.title = title
    this.subtitle = subtitle
    this.featuredImage = featuredImage
    this.author = postAuthor
    this.coAuthor = postCoAuthor
    this.tags = tags
    this.date = date
    this.updatedDate = updatedDate
    this.readTime = readTime
    this.servicePost = servicePost

    this.passData = this.passData.bind(this)
    this.showTag = this.showTag.bind(this)
  }

  passData(dataType: string) {
    if (this.postType === 'post') { return '' }
    switch (dataType) {
    case 'date':
      return this.date
    case 'updatedDate':
      return this.updatedDate
    case 'readTime':
      return this.readTime
    default:
      return ''
    }
  }

  showTag() {
    return Boolean(this.tags.length && this.postType === 'post')
  }
}

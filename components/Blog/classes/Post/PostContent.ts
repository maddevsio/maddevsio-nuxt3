import type { IPostContent, PostContentProps } from '~/components/Blog/interfaces/Post/IPostContent'
import type { IPostSidebar } from '~/components/Blog/interfaces/Post/IPostSidebar'
import type { Author, BlogPost } from '~/interfaces/common/commonInterfaces'
import { PostSidebar } from '~/components/Blog/classes/Post/PostSidebar'

export class PostContent implements IPostContent {
  slices: any[]
  type: string
  postSidebar: IPostSidebar
  postAuthor: Author
  postCoAuthor: Author | undefined
  recommendedPosts: BlogPost[]
  servicePost: boolean
  exploreChapters: any
  openGraphUrl: string
  metaTitle: string

  mobilePoint = 1185

  constructor({
    slices,
    type,
    metaTitle,
    openGraphUrl,
    tableOfContents,
    postAuthor,
    postCoAuthor,
    recommendedPosts,
    servicePost,
    exploreChapters,
  }: PostContentProps) {
    this.slices = slices
    this.type = type
    this.postSidebar = new PostSidebar({
      tableOfContents,
      openGraphUrl,
      metaTitle,
      servicePost: servicePost!,
    })
    this.postAuthor = postAuthor
    this.postCoAuthor = postCoAuthor
    this.recommendedPosts = recommendedPosts
    this.servicePost = servicePost!
    this.exploreChapters = exploreChapters
    this.openGraphUrl = openGraphUrl
    this.metaTitle = metaTitle
  }
}

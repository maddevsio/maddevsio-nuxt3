import type { IPostContent, PostContentProps } from '~/components/Blog/interfaces/Post/IPostContent'

export interface PostServiceContentProps extends PostContentProps {
  postForm: any
}

export interface IPostServiceContent extends IPostContent {
  postForm: any
}

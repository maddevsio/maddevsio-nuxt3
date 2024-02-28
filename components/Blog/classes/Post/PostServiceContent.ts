import { PostContent } from '~/components/Blog/classes/Post/PostContent'
import type {
  IPostServiceContent,
  PostServiceContentProps,
} from '~/components/Blog/interfaces/Post/IPostServiceContent'
import { PostSidebar } from '~/components/Blog/classes/Post/PostSidebar'

export class PostServiceContent extends PostContent implements IPostServiceContent {
  postForm: any

  constructor(props: PostServiceContentProps) {
    super({ ...props })
    this.mobilePoint = 1087
    this.postForm = props.postForm
    this.postSidebar = new PostSidebar({
      tableOfContents: props.tableOfContents,
      openGraphUrl: props.openGraphUrl,
      metaTitle: props.metaTitle,
      servicePost: Boolean(props.servicePost),
      postForm: props.postForm,
      mobilePoint: this.mobilePoint,
    })
  }
}

import type {
  CuNavigationButtonsProps,
  ICuNavigationButtons,
} from '~/components/Blog/interfaces/Post/ICuNavigationButtons'
import { getCurrentDocument } from '~/components/Blog/helpers/getCurrentDocument'

export class CuNavigationButtons implements ICuNavigationButtons {
  uid: string
  cuPosts: { label: string, uid: string }[]
  currentPost: { label: string, uid: string } | undefined
  currentPostIndex: number | undefined
  nextArticleUrl: string
  prevArticleUrl: string

  constructor({ uid, cuPosts }: CuNavigationButtonsProps) {
    this.uid = uid
    this.cuPosts = cuPosts
    this.currentPost = getCurrentDocument(uid, cuPosts).currentDocument
    this.currentPostIndex = getCurrentDocument(this.uid, cuPosts).currentDocumentIndex
    this.nextArticleUrl = this.getCuUrl(+1)
    this.prevArticleUrl = this.getCuUrl(-1)
  }

  getCuUrl(direction: number) {
    const index = this.currentPostIndex ? this.currentPostIndex + direction : 0
    return this.uid && index >= 0 && index < this.cuPosts.length
      ? `/customer-university/${ this.cuPosts[index].uid }/`
      : '#'
  }
}

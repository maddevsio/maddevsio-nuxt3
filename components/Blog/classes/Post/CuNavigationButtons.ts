import type { ComputedRef } from 'vue'
import type {
  CuNavigationButtonsProps,
  ICuNavigationButtons,
} from '~/components/Blog/interfaces/Post/ICuNavigationButtons'
import { getCurrentDocument } from '~/components/Blog/helpers/getCurrentDocument'

export class CuNavigationButtons implements ICuNavigationButtons {
  uid: string
  cuPosts: { label: string, uid: string }[]
  currentPost: ComputedRef<{ label: string, uid: string } | undefined>
  currentPostIndex: ComputedRef<number | undefined>
  nextArticleUrl: ComputedRef<string>
  prevArticleUrl: ComputedRef<string>

  constructor({ uid, cuPosts }: CuNavigationButtonsProps) {
    this.uid = uid
    this.cuPosts = cuPosts
    this.currentPost = computed(() => getCurrentDocument(uid, cuPosts).currentDocument)
    this.currentPostIndex = computed(() => getCurrentDocument(this.uid, cuPosts).currentDocumentIndex)
    this.nextArticleUrl = computed(() => this.getCuUrl(+1))
    this.prevArticleUrl = computed(() => this.getCuUrl(-1))
  }

  getCuUrl(direction: number) {
    const index = this.currentPostIndex.value! + direction
    return this.uid && index >= 0 && index < this.cuPosts.length
      ? `/customer-university/${ this.cuPosts[index].uid }/`
      : '#'
  }
}

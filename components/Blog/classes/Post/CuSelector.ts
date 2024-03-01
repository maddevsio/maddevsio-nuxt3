import type { Router } from 'vue-router'
import type { CuSelectorProps, ICUSelector } from '~/components/Blog/interfaces/Post/ICUSelector'
import { getCurrentDocument } from '~/components/Blog/helpers/getCurrentDocument'

export class CuSelector implements ICUSelector {
  uid: string
  cuPosts: { label: string, uid: string }[]
  currentPost: { label: string, uid: string } | undefined
  currentPostIndex: number | undefined

  constructor({ uid, cuPosts }: CuSelectorProps) {
    this.uid = uid
    this.cuPosts = cuPosts
    this.currentPost = getCurrentDocument(this.uid, cuPosts).currentDocument
    this.currentPostIndex = getCurrentDocument(this.uid, cuPosts).currentDocumentIndex

    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(selectedPost: { label: string, uid: string }, router: Router) {
    if (this.currentPost && this.currentPost.uid !== selectedPost.uid) {
      await router.push({ path: `/customer-university/${ selectedPost.uid }/` })
    }
  }
}

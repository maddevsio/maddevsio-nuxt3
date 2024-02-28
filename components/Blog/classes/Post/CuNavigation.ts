import type { CuNavigationProps, ICuNavigation } from '~/components/Blog/interfaces/Post/ICuNavigation'
import type { ICUSelector } from '~/components/Blog/interfaces/Post/ICUSelector'
import type { ICuNavigationButtons } from '~/components/Blog/interfaces/Post/ICuNavigationButtons'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'
import { CuSelector } from '~/components/Blog/classes/Post/CuSelector'
import { CuNavigationButtons } from '~/components/Blog/classes/Post/CuNavigationButtons'

export class CuNavigation implements ICuNavigation {
  uid: string
  clusterName: string
  cuSelector: ICUSelector
  cuNavigationButtons: ICuNavigationButtons

  constructor({
    uid,
    clusterName,
    cuPosts,
  }: CuNavigationProps) {
    this.uid = uid
    this.clusterName = clusterName
    this.cuSelector = new CuSelector({ uid, cuPosts: this.transformCuPosts(cuPosts) })
    this.cuNavigationButtons = new CuNavigationButtons({ uid, cuPosts: this.transformCuPosts(cuPosts) })
  }

  transformCuPosts(cuPosts: BlogPost[]) {
    return cuPosts.map(cuPost => ({
      label: cuPost.chapter_name ? cuPost.chapter_name[0].text : '',
      uid: cuPost.cu_post?.uid ? cuPost.cu_post.uid : '',
    }))
  }
}

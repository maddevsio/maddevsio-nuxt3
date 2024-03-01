import type { PrismicPlugin } from '@prismicio/vue'
import type { Ref } from 'vue'

export interface DigestBlogArticle {
  uid: string
  data: {
    title: string
    featured_image: object
  }
}
export interface IDigestMainPageCTA {
  article: Ref<DigestBlogArticle | null>
  blogBtnRef: Ref<HTMLElement & {$el: HTMLElement} | null>
  contentRef: Ref<HTMLElement | null>
  contentTextRef: Ref<HTMLElement | null>
  fetchArticle(prismic: PrismicPlugin):Promise<void>
  teleportBlogBtn(isMobile: boolean):void
}

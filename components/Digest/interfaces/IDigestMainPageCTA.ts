import type { PrismicPlugin } from '@prismicio/vue'
import type { Ref } from 'vue'
import type { BlogPost } from '~/interfaces/common/commonInterfaces'

export interface IDigestMainPageCTA {
  article: Ref<BlogPost | null>
  blogBtnRef: Ref<HTMLElement & {$el: HTMLElement} | null>
  contentRef: Ref<HTMLElement | null>
  contentTextRef: Ref<HTMLElement | null>
  fetchArticle(prismic: PrismicPlugin): Promise<void>
  teleportBlogBtn(isMobile: boolean): void
}

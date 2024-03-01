import type { PrismicPlugin } from '@prismicio/vue'
import type { Ref } from 'vue'
import type { DigestBlogArticle, IDigestMainPageCTA } from '~/components/Digest/interfaces/IDigestMainPageCTA'
import { DigestAPI } from '~/components/Digest/classes/DigestAPI'

export class DigestMainPageCTA implements IDigestMainPageCTA {
  article: Ref<DigestBlogArticle | null>
  blogBtnRef: Ref<HTMLElement & {$el: HTMLElement}| null>
  contentRef: Ref<HTMLElement | null>
  contentTextRef: Ref<HTMLElement | null>

  constructor() {
    this.article = ref(null)
    this.blogBtnRef = ref(null)
    this.contentRef = ref(null)
    this.contentTextRef = ref(null)

    this.fetchArticle = this.fetchArticle.bind(this)
    this.teleportBlogBtn = this.teleportBlogBtn.bind(this)
  }

  async fetchArticle(prismic: PrismicPlugin): Promise<void> {
    const response = await new DigestAPI().getBlogArticle(prismic)
    this.article.value = response.results[0]
  }

  teleportBlogBtn (isMobile: boolean) {
    if (isMobile) {
      if (this.contentRef.value && this.blogBtnRef.value?.$el) {
        return this.contentRef.value.appendChild(this.blogBtnRef.value.$el)
      }
    }
    if (this.contentTextRef.value && this.blogBtnRef.value) {
      return this.contentTextRef.value.appendChild(this.blogBtnRef.value.$el)
    }
  }
}

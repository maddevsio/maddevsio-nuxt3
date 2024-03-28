import type { Ref } from 'vue'

export interface IPostMetaInfo {
  date: string
  readTime: string
  updatedDate: string
  articleRate: Ref<number | string>
  fetchArticleRate(postId: string): Promise<void>
}

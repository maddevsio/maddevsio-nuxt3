import type { Ref } from 'vue'
import axios from 'axios'
import type { IPostMetaInfo } from '~/components/Blog/interfaces/Post/IPostMetaInfo'

export class PostMetaInfo implements IPostMetaInfo {
  date: string
  readTime: string
  updatedDate: string
  articleRate: Ref<number | string>

  constructor(
    date: string,
    readTime: string,
    updatedDate: string,
  ) {
    this.date = date
    this.readTime = readTime
    this.updatedDate = updatedDate

    this.articleRate = ref(0)

    this.fetchArticleRate = this.fetchArticleRate.bind(this)
  }

  async fetchArticleRate(postId: string) {
    try {
      const { data } = await axios.get(`/api/rating/?pageId=${ postId }`)
      this.articleRate.value = data.toFixed(1)
    } catch (e) {
      this.articleRate.value = 0
    }
  }
}

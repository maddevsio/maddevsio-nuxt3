import type { Ref } from 'vue'
import type { DateField, ImageField, RichTextField } from '@prismicio/client'
import axios from 'axios'

import type {
  DigestPostCardDefaultProps,
  IDigestPostCardDefault,
} from '~/components/PageBlocks/Digest/interfaces/IDigestPostCardDefault'
export class DigestPostCardDefault implements IDigestPostCardDefault {
  title: RichTextField
  description: RichTextField
  featuredImage: ImageField
  readTime: string
  date: DateField
  updatedDate: DateField
  type: string
  uid: string
  postId: string
  articleRate: Ref<string>

  constructor(props: DigestPostCardDefaultProps) {
    this.title = props.primary?.post?.data?.title
    this.description = props.primary?.description
    this.featuredImage = props.primary?.post?.data?.featured_image
    this.readTime = props.primary?.readTime || ''
    this.date = props.primary?.post?.data?.date
    this.updatedDate = props.primary?.post?.data?.updated_date
    this.type = props.primary?.post?.type
    this.uid = props.primary?.post?.uid
    this.postId = props?.primary?.post?.id
    this.articleRate = ref('')

    this.fetchPostRating = this.fetchPostRating.bind(this)
  }

  async fetchPostRating() {
    try {
      const response = await axios.get(`/api/rating/?pageId=${ this.postId }`)
      this.articleRate.value = response.data.toFixed(1)
    } catch {
      this.articleRate.value = '0'
    }
  }
}

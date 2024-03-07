import type { RichTextField, ImageField, DateField } from '@prismicio/client'
import type { Ref } from 'vue'

export interface DigestPostCardDefaultProps {
  primary: {
    description: RichTextField
    readTime: string
    post: {
      data: {
        title: RichTextField
        featured_image: ImageField
        date: DateField
        updated_date: DateField
      }
      type: string
      uid: string
      id: string
    }
  },

}
export interface IDigestPostCardDefault {
  title: RichTextField
  description: RichTextField
  featuredImage: ImageField
  readTime: string
  date: DateField
  updatedDate: DateField
  type: string
  uid: string
  postId: string
  articleRate: Ref<number>
  fetchPostRating(): Promise<void>
}

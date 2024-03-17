import type { ComputedRef } from 'vue'
import type {
  GlossaryPostFooterProps,
  IGlossaryPostFooter,
} from '~/components/Glossary/Post/interfaces/IGlossaryPostFooter'
import type { Author } from '~/interfaces/common/commonInterfaces'

export class GlossaryPostFooter implements IGlossaryPostFooter {
  author: Author
  coAuthor: Author
  updatedDate: string
  authorData: ComputedRef<object>
  coAuthorData: ComputedRef<object>
  constructor({ author, coAuthor, updatedDate }: GlossaryPostFooterProps) {
    this.author = author
    this.coAuthor = coAuthor
    this.updatedDate = updatedDate

    this.authorData = computed(() => {
      if (this.author?.data?.name) {
        return {
          name: this.author?.data?.name,
          position: this.author?.data?.position,
          image: this.author?.data?.thumbnail_image,
          link: linkResolver({ type: 'author', uid: this.author?.uid }),
        }
      }
      return {}
    })

    this.coAuthorData = computed(() => {
      if (this.coAuthor?.data?.name) {
        return {
          name: this.coAuthor?.data?.name,
          position: this.coAuthor?.data?.position,
          image: this.coAuthor?.data?.thumbnail_image,
          link: linkResolver({ type: 'author', uid: this.coAuthor?.uid }),
        }
      }
      return {}
    })
  }
}

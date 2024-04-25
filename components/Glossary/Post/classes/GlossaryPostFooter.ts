import type {
  GlossaryPostFooterProps,
  IGlossaryPostFooter, TransformedGlossaryTag,
} from '~/components/Glossary/Post/interfaces/IGlossaryPostFooter'
import type { Author, TransformedGlossaryAuthor } from '~/interfaces/common/commonInterfaces'

export class GlossaryPostFooter implements IGlossaryPostFooter {
  author: Author
  coAuthor: Author
  updatedDate: string
  authorData: TransformedGlossaryAuthor
  coAuthorData: TransformedGlossaryAuthor
  tags: TransformedGlossaryTag[]
  constructor({
    author,
    coAuthor,
    updatedDate,
    tags,
  }: GlossaryPostFooterProps) {
    this.author = author
    this.coAuthor = coAuthor
    this.updatedDate = updatedDate
    this.tags = tags

    this.authorData = this.transformGlossaryAuthorData(this.author)
    this.coAuthorData = this.transformGlossaryAuthorData(this.coAuthor)
  }

  transformGlossaryAuthorData(author: Author) {
    return author.data && Object.keys(author.data).length
      ? {
        name: author?.data?.name,
        position: author?.data?.position,
        image: author?.data?.thumbnail_image,
        link: linkResolver({ type: 'author', uid: author?.uid }),
      }
      : {}
  }
}

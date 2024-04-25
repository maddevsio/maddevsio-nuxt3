import type { Author, TransformedGlossaryAuthor } from '~/interfaces/common/commonInterfaces'

export interface TransformedGlossaryTag {
  name: string
  link: string
}

export interface GlossaryPostFooterProps {
  author: Author
  coAuthor: Author
  updatedDate: string
  tags: TransformedGlossaryTag[]
}

export interface IGlossaryPostFooter extends GlossaryPostFooterProps {
  authorData: TransformedGlossaryAuthor
  coAuthorData: TransformedGlossaryAuthor
  transformGlossaryAuthorData(author: Author): TransformedGlossaryAuthor
}

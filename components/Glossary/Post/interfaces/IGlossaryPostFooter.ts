import type { Author, TransformedGlossaryAuthor } from '~/interfaces/common/commonInterfaces'
export interface GlossaryPostFooterProps {
  author: Author
  coAuthor: Author
  updatedDate: string
}

export interface IGlossaryPostFooter extends GlossaryPostFooterProps {
  authorData: TransformedGlossaryAuthor
  coAuthorData: TransformedGlossaryAuthor
  transformGlossaryAuthorData(author: Author): TransformedGlossaryAuthor
}

import type { ComputedRef } from 'vue'
import type { Author } from '~/interfaces/common/commonInterfaces'

export interface GlossaryPostFooterProps {
  author: Author
  coAuthor: Author
  updatedDate: string
}

export interface IGlossaryPostFooter extends GlossaryPostFooterProps {
  authorData: ComputedRef<object>
  coAuthorData: ComputedRef<object>
}

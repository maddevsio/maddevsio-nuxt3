import type { SelectField } from '@prismicio/types'
import type { BooleanField } from '@prismicio/client'
import type {
  ICustomizableAuthors,
  CustomizableAuthorsProps,
  CustomizableAuthor,
} from '~/components/PageBlocks/Authors/interface/ICustomizableAuthors'

export class CustomizableAuthors implements ICustomizableAuthors {
  colorTheme: SelectField
  showTopDivider: BooleanField
  author: CustomizableAuthor | null
  coAuthor: CustomizableAuthor | null

  constructor(props: CustomizableAuthorsProps) {
    this.author = props.primary?.author?.data || null
    this.coAuthor = props.primary?.coAuthor?.data || null
    this.showTopDivider = props.primary.showTopDivider !== null ? props.primary.showTopDivider : true
    this.colorTheme = props.primary.colorTheme || 'dark'
  }
}

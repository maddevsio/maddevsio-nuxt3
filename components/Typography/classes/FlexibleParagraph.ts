import type { FlexibleParagraphProps, IFlexibleParagraph } from '~/components/Typography/interfaces/IFlexibleParagraph'
import { getTextClassNames, getTextSizes } from '~/components/Typography/helpers/textHelpers'

export class FlexibleParagraph implements IFlexibleParagraph {
  type: string
  colorTheme: string
  text: string
  maxWidth: string
  tag: string
  position: string
  fontWeight: string
  textAlign: string
  textSizesClassnames: string[]
  cssVars: {
    '--font-weight': string
    '--text-align': string
    '--max-width': string
  }

  constructor(props: FlexibleParagraphProps) {
    this.type = props.primary.type || 'default'
    this.colorTheme = props.primary.colorTheme || 'black'
    this.text = props.primary.text || ''
    this.maxWidth = props.primary.maxWidth || '100%'
    this.tag = props.primary.tag || 'p'
    this.position = props.primary.position || 'left'
    this.fontWeight = props.primary.fontWeight || '400'
    this.textAlign = props.primary.textAlign || 'left'
    this.cssVars = {
      '--font-weight': this.fontWeight,
      '--text-align': this.textAlign,
      '--max-width': this.maxWidth,
    }
    this.textSizesClassnames = getTextClassNames(getTextSizes(props.primary), 'paragraph-slice')
  }
}

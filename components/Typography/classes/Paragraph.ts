import type { IParagraph, ParagraphProps } from '~/components/Typography/interfaces/IParagraph'
import { getTextClassNames, getTextSizes } from '~/components/Typography/helpers/textHelpers'

export class Paragraph implements IParagraph {
  text: string
  maxWidth: string
  background: string | null
  position: string
  themeColorClass: string
  paragraphType: string
  textSizesClassnames: string[]

  constructor(props: ParagraphProps) {
    this.text = props.primary.text || ''
    this.maxWidth = props.primary.maxWidth || ''
    this.background = setSliceBackground(props.primary.colorTheme || 'black')
    this.position = props.primary.position || 'left'
    this.themeColorClass = getThemeColorClass('paragraph-text', props.primary.colorTheme || 'black')
    this.paragraphType = props.primary.type || 'default'
    this.textSizesClassnames = getTextClassNames(getTextSizes(props.primary), 'paragraph')
  }
}

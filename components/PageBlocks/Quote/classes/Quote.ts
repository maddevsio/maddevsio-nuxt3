import type { ImageField, RichTextField } from '@prismicio/types'
import type { IQuote, QuoteProps } from '~/components/PageBlocks/Quote/interfaces/IQuote'

export class Quote implements IQuote {
  authorName: RichTextField
  quotationDesign: string
  containerSize: string
  quote: RichTextField
  portraitAuthor: ImageField
  email: string
  linkedinLink: string
  colorTheme: {
    backgroundSlice: string
    textColor: string
  }

  constructor(props: QuoteProps) {
    this.authorName = props.primary.author
    this.quotationDesign = props.primary.quotationDesign
    this.containerSize = props.primary.containerSize || '816'
    this.quote = props.primary.quote
    this.portraitAuthor = props.primary.portraitAuthor
    this.email = props.primary.email || ''
    this.linkedinLink = props.primary.linkedinLink || ''
    this.colorTheme = {
      backgroundSlice: colorConverterToClass('slice-bg', props.primary.colorTheme || 'white'),
      textColor: colorConverterToClass('text', this.checkColor(props.primary.colorTheme)),
    }
  }

  checkColor(color: string) {
    if (!color) { return 'black' }
    return color === 'white' ? 'black' : 'gray'
  }
}

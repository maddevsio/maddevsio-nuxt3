import type { ImageField, RichTextField } from '@prismicio/types'

export interface QuoteProps {
  primary: {
    author: RichTextField
    quotationDesign: string
    containerSize: string
    quote: RichTextField
    portraitAuthor: ImageField
    email: string
    linkedinLink: string
    colorTheme: string
  }
}

export interface IQuote {
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
  checkColor(color: string): string
}

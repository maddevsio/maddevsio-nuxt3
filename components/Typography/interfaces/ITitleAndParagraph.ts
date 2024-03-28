import type { RichTextField } from '@prismicio/types'

export interface TitleAndParagraphProps {
  primary: {
    title: RichTextField
    description: RichTextField
    position: string
    maxWidth: string
  }
}

export interface ITitleAndParagraph {
  title: RichTextField
  description: RichTextField
  position: string
  maxWidth: string
}

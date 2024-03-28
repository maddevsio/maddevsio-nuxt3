import type { RichTextField } from '@prismicio/types'
import type { ITitleAndParagraph, TitleAndParagraphProps } from '~/components/Typography/interfaces/ITitleAndParagraph'

export class TitleAndParagraph implements ITitleAndParagraph {
  title: RichTextField
  description: RichTextField
  position: string
  maxWidth: string

  constructor(props: TitleAndParagraphProps) {
    this.title = props.primary.title
    this.description = props.primary.description
    this.position = props.primary.position
    this.maxWidth = props.primary.maxWidth
  }
}

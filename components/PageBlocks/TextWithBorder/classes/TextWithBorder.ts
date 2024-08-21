import type {
  ITextWithBorder,
  TextWithBorderProps,
} from '~/components/PageBlocks/TextWithBorder/interfaces/ITextWithBorder'

export class TextWithBorder implements ITextWithBorder {
  title: string
  description: string

  constructor(props: TextWithBorderProps) {
    this.title = props.primary?.title
    this.description = props.primary?.description
  }
}

import type {
  ITextWithBorderDefault, TextWithBorderDefaultProps,
} from '~/components/PageBlocks/TextWithBorder/interfaces/ITextWithBorderDefault'

export class TextWithBorderDefault implements ITextWithBorderDefault {
  title: string
  description: string

  constructor(props: TextWithBorderDefaultProps) {
    this.title = props.primary?.title
    this.description = props.primary?.description
  }
}

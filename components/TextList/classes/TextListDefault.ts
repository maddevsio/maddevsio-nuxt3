import type {
  ITextItem,
  ITextListDefault,
  TextListDefaultProps,
} from '~/components/TextList/interfaces/ITextListDefault'

export class TextListDefault implements ITextListDefault {
  title: string
  containerSize: string
  items: ITextItem[]

  constructor(props: TextListDefaultProps) {
    this.title = props.primary.title || ''
    this.containerSize = props.primary.containerSize || '816'
    this.items = props.items || []
  }
}

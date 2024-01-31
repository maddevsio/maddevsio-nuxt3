import type {
  IProcessInline,
  IProcessInlineCard,
  ProcessInlineProps,
} from '~/components/Process/interfaces/IProcessInline'

export class ProcessInline implements IProcessInline {
  colorTheme: string
  cards: IProcessInlineCard[]

  constructor(props: ProcessInlineProps) {
    this.cards = props.items
    this.colorTheme = props.primary.backgroundColor || 'black'
  }
}

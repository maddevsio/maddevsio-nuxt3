import type {
  CardWithColoredTitleProps,
  ICardWithColoredTitle,
  ICardWithColoredTitleItem,
} from '~/components/PageBlocks/CardWithColoredTitle/interfaces/ICardWithColoredTitle'

export class CardWithColoredTitle implements ICardWithColoredTitle {
  cards: ICardWithColoredTitleItem[]
  sliceBackgroundColor: string

  constructor(props: CardWithColoredTitleProps) {
    this.cards = props.items
    this.sliceBackgroundColor = props.primary.backgroundColor
  }
}

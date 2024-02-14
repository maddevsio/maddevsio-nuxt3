import type {
  CardWithColoredTitleAndIconProps,
  ICardWithColoredTitleAndIcon,
  ICardWithColoredTitleAndIconItem,
} from '~/components/PageBlocks/CardWithColoredTitle/interfaces/ICardWithColoredTitleAndIcon'

export class CardWithColoredTitleAndIcon implements ICardWithColoredTitleAndIcon {
  backgroundColor: string
  cards: ICardWithColoredTitleAndIconItem[]

  constructor(props: CardWithColoredTitleAndIconProps) {
    this.backgroundColor = colorConverterToClass('slice-bg', props.primary.backgroundColor || 'white')
    this.cards = props.items.map(card => ({
      ...card,
      title: card.title?.replace(/\n/g, '<br />'),
      titleColor: colorConverterToClass('text', card?.titleColor || 'black'),
      descriptionColor: colorConverterToClass('text', props.primary?.backgroundColor === 'white' ? 'black' : 'white'),
      cardBackgroundColor: colorConverterToClass('bg', props.primary?.backgroundColor || 'white'),
    }))
  }
}

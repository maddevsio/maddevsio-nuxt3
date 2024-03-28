import type {
  CardsWithIconProps,
  ICardsWithIcon,
  ICardWithIcon,
} from '~/components/PageBlocks/CardsWithIcon/interfaces/ICardsWithIcon'

export class CardsWithIcon implements ICardsWithIcon {
  containerSize: string
  cards: ICardWithIcon[]

  constructor(props: CardsWithIconProps) {
    this.containerSize = props.primary.containerSize || '1240'
    this.cards = props.items
  }
}

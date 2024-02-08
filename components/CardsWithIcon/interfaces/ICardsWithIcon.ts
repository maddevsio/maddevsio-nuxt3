import type { ImageField, RichTextField } from '@prismicio/types'

export interface ICardWithIcon {
  title: RichTextField
  description: string
  iconImage: ImageField
}

export interface CardsWithIconProps {
  primary: {
    containerSize: string
  }
  items: ICardWithIcon[]
}

export interface ICardsWithIcon {
  containerSize: string
  cards: ICardWithIcon[]
}

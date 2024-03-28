import type { ImageField } from '@prismicio/types'

export interface ICardWithColoredTitleAndIconItem {
  title: string
  titleColor: string
  descriptionColor: string
  cardBackgroundColor: string
  titleTag: string
  description: string
  icon: ImageField
}

export interface CardWithColoredTitleAndIconProps {
  items: ICardWithColoredTitleAndIconItem[]
  primary: {
    backgroundColor: string
  }
}

export interface ICardWithColoredTitleAndIcon {
  backgroundColor: string
  cards: ICardWithColoredTitleAndIconItem[]
}

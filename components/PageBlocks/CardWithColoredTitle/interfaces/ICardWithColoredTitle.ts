export interface ICardWithColoredTitleItem {
  title: string
  titleTag: string
  titleColor: string
  description: string
}

export interface CardWithColoredTitleProps {
  items: ICardWithColoredTitleItem[]
  primary: {
    backgroundColor: string
  }
}

export interface ICardWithColoredTitle {
  cards: ICardWithColoredTitleItem[]
  sliceBackgroundColor: string
}

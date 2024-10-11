import type { ImageField, RichTextField, SelectField } from '@prismicio/types'

export interface ComparisonCard {
  image: ImageField
  content: RichTextField
}
export interface ComparisonDefaultProps {
  primary: {
    colorTheme: SelectField
    columnNumber: number
    cards: ComparisonCard[]
  }
}

export interface IComparisonDefault {
  colorTheme: SelectField
  columnNumber: number
  cards: ComparisonCard[]
}

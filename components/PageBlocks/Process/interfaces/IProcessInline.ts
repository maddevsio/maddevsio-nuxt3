import type { ImageField } from '@prismicio/types'

export interface IProcessInlineCard {
  icon: ImageField
  title: string
  description: string
  showBottomDivider: boolean
}

export interface ProcessInlineProps {
  items: IProcessInlineCard[]
  primary: {
    backgroundColor: string
  }
}

export interface IProcessInline {
  colorTheme: string
  cards: IProcessInlineCard[]
}

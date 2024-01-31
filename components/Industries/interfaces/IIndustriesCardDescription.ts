import type { ImageField } from '@prismicio/types'
import type { Router } from 'vue-router'

export interface IIndustriesCardDescriptionItem {
  icon: ImageField
  description: string
  linkToIndustryPage: string
  cardBackgroundColor: string
  cardTextColor: string
}

export interface IndustriesCardDescriptionProps {
  items: IIndustriesCardDescriptionItem[]
  primary: {
    colorTheme: string
  }
}

export interface IIndustriesCardDescription {
  cards: IIndustriesCardDescriptionItem[]
  colorTheme: string
  sliceBackground: string
  goToPage: (url: string, router: Router) => Promise<void>
}

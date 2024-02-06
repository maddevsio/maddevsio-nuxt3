import type { ImageField } from '@prismicio/types'

export interface IBenefitCard {
  description: string
  icon: ImageField
}

export interface BenefitCardsProps {
  primary: {
    background: string
    tag: string
    text: string
  }
  items: IBenefitCard[]
}

export interface IBenefitCards {
  background: string | null
  tag: string
  title: string
  cards: IBenefitCard[]
}

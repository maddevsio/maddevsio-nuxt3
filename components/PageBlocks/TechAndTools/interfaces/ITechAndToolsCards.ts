import type { ImageField } from '@prismicio/types'

export interface TechAndToolsCard {
  isBig: boolean
  description: string
  icon: ImageField
  title: string
}

export interface TechAndToolsBigCard extends TechAndToolsCard {
  classNames: {
    mainSection: string[]
    titleColor: string[]
    descriptionColor: string[]
    iconWrapper?: string[]
    cardInfo?: string[]
  }
}

export interface TechAndToolsLittleCard extends TechAndToolsCard {
  className: {
    wrapper: string[]
    title: string[]
  }
}

export interface TechAndToolsCardsProps {
  primary: {
    theme: string
    isPostPage: boolean
    addBorder: boolean
  }
  items: TechAndToolsCard[]
}

export interface ITechAndToolsCards {
  maxCards: number
  countCards: string
  colorTheme: string
  isPostPage: boolean
  addBorderToIcons: boolean
  bigCards: TechAndToolsBigCard[]
  littleCards: TechAndToolsLittleCard[]
}

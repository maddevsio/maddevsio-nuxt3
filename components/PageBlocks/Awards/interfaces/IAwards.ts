import type { ImageField } from '@prismicio/types'

export interface BigCard {
  image: ImageField
  description: string
}

export interface LittleCard {
  image: ImageField
}

export interface AwardsProps {
  items: {
    isBig: boolean
    image: ImageField
    description: string
  }[]
  primary: {
    background: string
  }
}

export interface IAwards {
  bigCard: BigCard | undefined
  littleCards: LittleCard[]
  background: string | null
  backgroundInText: string | null
}

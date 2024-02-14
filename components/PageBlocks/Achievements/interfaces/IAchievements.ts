import type { ImageField } from '@prismicio/types'

export interface IAchievementCard {
  image: ImageField
  width: number
  height: number
  description: string
}

export interface AchievementCardsProps {
  items: IAchievementCard[]
}

export interface IAchievements {
  achievements: IAchievementCard[]
}

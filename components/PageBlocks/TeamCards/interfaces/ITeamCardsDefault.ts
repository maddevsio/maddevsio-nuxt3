import type { FilledLinkToWebField, ImageField } from '@prismicio/types'
import type { Ref } from 'vue'

export interface TeamDefaultCard {
  hoverImage: ImageField
  image: ImageField
  isHover: boolean
  linkedin: FilledLinkToWebField
  name: string
  position: string
}

export interface TeamCardsDefaultProps {
  items: TeamDefaultCard[]
}

export interface ITeamCardsDefault {
  hoverCount: Ref<number>
  toggleImage: Ref<boolean>
  cards: TeamDefaultCard[]
  toggleImageHandler(): void
}

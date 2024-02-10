import type { FilledLinkToWebField, ImageField } from '@prismicio/types'

export interface TeamCardWithRoundedPhoto {
  name: string
  position: string
  image: ImageField
  link: FilledLinkToWebField
}

export interface TransformedTeamCardWithRoundedPhoto {
  name: string
  position: string
  image: ImageField
  link: {
    ourDomain: boolean
    url: string
  }
  textColor: string
}

export interface TeamCardsWithRoundedPhotoProps {
  primary: {
    backgroundColor: string
  }
  items: TeamCardWithRoundedPhoto[]
}

export interface ITeamCardsWithRoundedPhoto {
  cards: TransformedTeamCardWithRoundedPhoto[]
  backgroundColor: string
  containerColor: string
}

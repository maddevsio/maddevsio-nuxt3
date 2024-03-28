import type { RichTextField } from '@prismicio/types'
import type { Router } from 'vue-router'

export type SimpleCard = {
  bigCard: boolean
  link: string
  icon: {
    url: string
    alt: string
  }
  title: string
  titleTag: string
  titleColor: string
  description: RichTextField
  descriptionColor: string
  positionAtRow: string
  backgroundColor: string
}

export interface SimpleCardWithIconProps {
  items: SimpleCard[]
  primary: {
    backgroundColor: string
  }
  router: Router
}

export type CardClass = string | { [key: string]: boolean | undefined }

export interface ISimpleCardWithIcon {
  cards: SimpleCard[]
  sliceBackgroundColor: string
  animatedCards: boolean
  fourAnimatedCards: boolean
  router: Router
  getCardClassNames(card: SimpleCard): CardClass[]
  getCardDescriptionClassNames({ descriptionColor }: { descriptionColor: string }): string
  setRowId(item: SimpleCard, index: number): boolean | string
  redirectToUrl($event: { target: { tagName: string, href: any } }, { tag, link }: { tag: string, link: string }): void
}

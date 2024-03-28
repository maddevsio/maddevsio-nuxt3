import type { FilledLinkToWebField, RichTextField } from '@prismicio/client'

export interface GridLottieLinkCard {
  alignText: string
  background: string
  content: RichTextField
  fullWidth: boolean
  link: FilledLinkToWebField
  'lottie-S3-path': string
  'lottie-animation': string
  lottieHeight: string
  lottiePosition: string
  width: string
}

type ClassName = string | null

export interface GridLottieLinkTransformedCard extends GridLottieLinkCard {
  element: string
  linkParams: {
    url?: string | null
    target?: string | null
  }
  classNames: ClassName[]
  height: string
}

export interface GridLottieLinkProps {
  items: GridLottieLinkCard[]
}

export interface IGridLottieLink {
  cards: GridLottieLinkTransformedCard[]
  setClassNames(cards: GridLottieLinkCard[]): GridLottieLinkTransformedCard[]
  getLink(link: string): string
}

import type { FilledLinkToWebField, ImageField } from '@prismicio/types'

export interface Logo {
  link: FilledLinkToWebField
  image: ImageField
}

export interface TransformedLogo {
  cardBackgroundColor: string
  image: ImageField
  link: {
    ourDomain: boolean
    url: string
  }
}

export interface LogosProps {
  items: Logo[]
  primary: {
    backgroundColor: string
  }
}

export interface ILogos {
  cards: TransformedLogo[]
  backgroundColor: string
}

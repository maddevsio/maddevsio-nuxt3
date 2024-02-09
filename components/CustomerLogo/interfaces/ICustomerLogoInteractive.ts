import type { ImageField } from '@prismicio/types'
import type { Ref } from 'vue'

export interface NetworkLink {
  url?: string
  type: string
}

export interface LogoFromPrismic {
  logo: ImageField
  title: string
  description: string
  linkToCaseStudy: string
  linkedin: NetworkLink
  facebook: NetworkLink
  twitter: NetworkLink
  externalLinkToSite: NetworkLink
}

export interface INetwork {
  name: string
  type: string
  url?: string
}

export interface ICard {
  id: string
  title: string
  logo: ImageField
  description: string
  linkToCaseStudy: string
  socialNetworks: INetwork[]
}

export interface CustomerLogoInteractiveNetworksProps {
  socialNetworks: INetwork[],
  colorTheme: string,
}

export interface ICustomerLogoInteractiveNetworks {
  socialNetworks: Ref<INetwork[]>
  colorTheme: string
  setClassNames(network: INetwork): string[]
}

export interface CustomerLogoInteractiveCardProps {
  id: string
  logo: ImageField
  title: string
  description: string
  linkToCaseStudy: string
  socialNetworks: INetwork[]
  colorTheme: string
  containerSize: string
}

export interface ICustomerLogoInteractiveCard {
  id: string
  logo: ImageField
  title: string
  description: string
  linkToCaseStudy: string
  socialNetworksInstance: ICustomerLogoInteractiveNetworks
  colorTheme: string
  containerSize: string
  setClassnames(): string[]
  setChildClassnames(child: string): string
  clickHandler(emit: any): void
  getCardWidth: (littleCardsLength: number) => number
  setLineClamp(): void
}

export interface CustomerLogoInteractiveCardsProps {
  cards: ICard[]
  containerSize: string
  colorTheme: string
}

export interface ICustomerLogoInteractiveCards {
  containerSize: string
  colorTheme: string
  cards: Ref<ICustomerLogoInteractiveCard[]>
  currentActiveCard: Ref<ICustomerLogoInteractiveCard | undefined>
  secondCard: Ref<ICustomerLogoInteractiveCard | undefined>
  previousCard: Ref<ICustomerLogoInteractiveCard | undefined>
  littleCards: Ref<ICustomerLogoInteractiveCard[]>
  littleCardsLength: Ref<number>
  initCards(cards: ICard[]): void
  changeCard(card: ICustomerLogoInteractiveCard): void
  setClassnameToLittleCard(): string
}

export interface CustomerLogoInteractiveProps {
  items: LogoFromPrismic[]
  primary: {
    colorTheme: string
    containerSize: string
  }
}

export interface ICustomerLogoInteractive {
  containerSize: string
  colorTheme: string
  cards: ICustomerLogoInteractiveCards
  transformCustomersLogoData: (cards: LogoFromPrismic[]) => ICard[]
  setBackgroundClassname(): string
}

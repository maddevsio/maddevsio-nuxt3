import type { ImageField } from '@prismicio/types'
import type {
  CustomerLogoInteractiveCardProps,
  ICustomerLogoInteractiveCard,
  ICustomerLogoInteractiveNetworks,
} from '~/components/CustomerLogo/interfaces/ICustomerLogoInteractive'
import { CustomerLogoInteractiveNetworks } from '~/components/CustomerLogo/classes/CustomerLogoInteractiveNetworks'

export class CustomerLogoInteractiveCard implements ICustomerLogoInteractiveCard {
  id: string
  logo: ImageField
  title: string
  description: string
  linkToCaseStudy: string
  socialNetworksInstance: ICustomerLogoInteractiveNetworks
  colorTheme: string
  containerSize: string

  constructor({
    id,
    logo,
    title,
    description,
    linkToCaseStudy,
    socialNetworks,
    colorTheme,
    containerSize,
  }: CustomerLogoInteractiveCardProps) {
    this.id = id
    this.logo = logo
    this.title = title
    this.description = description
    this.linkToCaseStudy = linkToCaseStudy
    this.socialNetworksInstance = new CustomerLogoInteractiveNetworks({
      socialNetworks,
      colorTheme,
    })
    this.colorTheme = colorTheme
    this.containerSize = containerSize

    this.setClassnames = this.setClassnames.bind(this)
    this.setChildClassnames = this.setChildClassnames.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.getCardWidth = this.getCardWidth.bind(this)
    this.setLineClamp = this.setLineClamp.bind(this)
  }

  setClassnames() {
    const classnames = []
    if (!this.linkToCaseStudy && !this.socialNetworksInstance.socialNetworks.value.length) { classnames.push('customer-logo-card-big--only-desc') }
    classnames.push(`customer-logo-card-big--${ this.colorTheme }`)
    return classnames
  }

  setChildClassnames(child: string) {
    return `customer-logo-card-big__${ child }--${ this.colorTheme }`
  }

  clickHandler(emit: any) {
    emit('little-card-click', this)
  }

  getCardWidth = (littleCardsLength: number) => (100 - 30) / (littleCardsLength / 2)

  setLineClamp() {
    if (
      this.containerSize === '1026' ||
      (!this.linkToCaseStudy &&
        !this.socialNetworksInstance.socialNetworks.value.length)) { return '-webkit-line-clamp: 8;' }
    return '-webkit-line-clamp: 6;'
  }
}

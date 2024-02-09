import type {
  CustomerLogoInteractiveProps,
  ICustomerLogoInteractive,
  ICustomerLogoInteractiveCards, LogoFromPrismic,
} from '~/components/CustomerLogo/interfaces/ICustomerLogoInteractive'
import { CustomerLogoInteractiveCards } from '~/components/CustomerLogo/classes/CustomerLogoInteractiveCards'

export class CustomerLogoInteractive implements ICustomerLogoInteractive {
  containerSize: string
  colorTheme: string
  cards: ICustomerLogoInteractiveCards

  constructor(props: CustomerLogoInteractiveProps) {
    this.containerSize = props.primary.containerSize || '1240'
    this.colorTheme = props.primary.colorTheme || 'black'
    this.cards = new CustomerLogoInteractiveCards({
      cards: this.transformCustomersLogoData(props.items),
      containerSize: this.containerSize,
      colorTheme: this.colorTheme,
    })

    this.setBackgroundClassname = this.setBackgroundClassname.bind(this)
  }

  transformCustomersLogoData = (cards: LogoFromPrismic[]) => cards.map((network, networkIndex) => ({
    ...network,
    id: `${ network.title.replace(' ', '-') }-${ networkIndex }`,
    socialNetworks: [
      {
        ...network.twitter,
        name: 'twitter',
      },
      {
        ...network.facebook,
        name: 'facebook',
      },
      {
        ...network.linkedin,
        name: 'linkedin',
      },
      {
        ...network.externalLinkToSite,
        name: 'external-link',
      },
    ].filter(availableNetwork => availableNetwork?.url),
  }))

  setBackgroundClassname() {
    return `customers-logo-interactive--${ this.colorTheme }`
  }
}

import type { Ref } from 'vue'
import type {
  CustomerLogoInteractiveNetworksProps,
  ICustomerLogoInteractiveNetworks,
  INetwork,
} from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoInteractive'

export class CustomerLogoInteractiveNetworks implements ICustomerLogoInteractiveNetworks {
  socialNetworks: Ref<INetwork[]>
  colorTheme: string

  constructor({
    socialNetworks,
    colorTheme,
  }: CustomerLogoInteractiveNetworksProps) {
    this.socialNetworks = ref(socialNetworks)
    this.colorTheme = colorTheme

    this.setClassNames = this.setClassNames.bind(this)
  }

  setClassNames(network: INetwork) {
    return [
      'customer-logo-card-networks__network-link',
      `customer-logo-card-networks__network-link--${ network.name }`,
      `customer-logo-card-networks__network-link--${ network.name }-${ this.colorTheme }`,
      `customer-logo-card-networks__network-link--${ this.colorTheme }`,
    ]
  }
}

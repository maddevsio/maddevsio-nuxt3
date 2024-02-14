import { CustomersBase } from '~/components/PageBlocks/Customers/classes/CustomersBase'

export class CustomersBlack extends CustomersBase {
  constructor() {
    super()
    this.uidLogosDocument = 'list-of-customer-logos-black'

    this.getCustomersLogo = this.getCustomersLogo.bind(this)

    markRaw(this)
  }
}

import { CustomersBase } from '~/components/PageBlocks/Customers/classes/CustomersBase'

export class CustomersWhite extends CustomersBase {
  constructor() {
    super()
    this.uidLogosDocument = 'list-of-customer-logos'

    this.getCustomersLogo = this.getCustomersLogo.bind(this)

    markRaw(this)
  }
}

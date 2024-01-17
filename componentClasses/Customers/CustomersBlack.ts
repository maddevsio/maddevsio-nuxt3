import { CustomersBase } from '~/componentClasses/Customers/CustomersBase'

export class CustomersBlack extends CustomersBase {
  constructor() {
    super()
    this.uidLogosDocument = 'list-of-customer-logos-black'

    this.getCustomersLogo = this.getCustomersLogo.bind(this)

    markRaw(this)
  }
}

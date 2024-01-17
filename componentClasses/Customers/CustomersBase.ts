import { Client } from '@prismicio/client'
import type { ICustomers } from '~/interfaces/componentInterfaces/Customers/ICustomers'

export class CustomersBase implements ICustomers {
  customType = 'customerstype'

  uidLogosDocument = ''

  customerLogos = ref([])

  async getCustomersLogo(client: Client) {
    const response = await client.getByUID(this.customType, this.uidLogosDocument)
    this.customerLogos.value = response.data.body[0].items
  }
}

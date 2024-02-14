import type { Ref } from 'vue'
import type { Client } from '@prismicio/client'

export interface ICustomer {
  gallery_image: {
    url: string
    alt: string
  }
}

export interface ICustomers {
  customType: string
  uidLogosDocument: string
  customerLogos: Ref<ICustomer[]>
  getCustomersLogo: (client: Client) => void
}

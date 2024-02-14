import type { ImageField } from '@prismicio/types'

export interface ICustomerLogoDefaultItem {
  link: {
    url: string
    type: string
  }
  logo: ImageField
}

export interface CustomerLogoDefaultProps {
  primary: {
    colorTheme: string
  }
  items: ICustomerLogoDefaultItem[]
}

export interface ICustomerLogoDefault {
  customers: ICustomerLogoDefaultItem[]
  background: string | null
  colorThemeClass: string
}

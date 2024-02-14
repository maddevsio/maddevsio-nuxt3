import type {
  CustomerLogoDefaultProps,
  ICustomerLogoDefault,
  ICustomerLogoDefaultItem,
} from '~/components/PageBlocks/CustomerLogo/interfaces/ICustomerLogoDefault'

export class CustomerLogoDefault implements ICustomerLogoDefault {
  customers: ICustomerLogoDefaultItem[]
  background: string | null
  colorThemeClass: string

  constructor(props: CustomerLogoDefaultProps) {
    this.customers = props.items
    this.background = setSliceBackground(props.primary.colorTheme || 'white')
    this.colorThemeClass = getThemeColorClass('customer-logo-slice', props.primary.colorTheme || 'white')
  }
}

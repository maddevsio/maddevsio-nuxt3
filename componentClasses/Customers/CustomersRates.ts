import type { CustomersRatesProps, ICustomersRates } from '~/interfaces/componentInterfaces/Customers/ICustomersRates'
import setSliceBackground from '~/utils/setSliceBackground'

export class CustomersRates implements ICustomersRates {
  cards
  backgroundColor

  backgroundInText
  constructor(props: CustomersRatesProps) {
    this.cards = props.items || []
    this.backgroundColor = setSliceBackground(props.primary.background || 'black')
    this.backgroundInText = props.primary.background || 'white'
  }
}

import type {
  CustomersRatesProps,
  ICustomersRates,
  ICustomersRatesItem,
} from '~/components/PageBlocks/Customers/interfaces/ICustomersRates'
import setSliceBackground from '~/utils/setSliceBackground'

export class CustomersRates implements ICustomersRates {
  cards: ICustomersRatesItem[]
  backgroundColor: string | null
  backgroundInText: string | null
  constructor(props: CustomersRatesProps) {
    this.cards = props.items || []
    this.backgroundColor = setSliceBackground(props.primary.background || 'black')
    this.backgroundInText = props.primary.background || 'white'
  }
}

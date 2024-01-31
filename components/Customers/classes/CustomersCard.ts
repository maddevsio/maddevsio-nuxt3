import type {
  CustomersCardProps,
  ICustomerCardItem,
  ICustomersCard,
} from '~/components/Customers/interfaces/ICustomersCard'

export class CustomersCard implements ICustomersCard {
  backgroundColor = 'black'
  cards: ICustomerCardItem[] = []
  constructor(props: CustomersCardProps) {
    this.backgroundColor = props.primary.backgroundColor || this.backgroundColor
    this.cards = props.items || this.cards

    this.replacePhotoUrl = this.replacePhotoUrl.bind(this)
  }

  replacePhotoUrl = (photoUrl: string) => {
    if (photoUrl.includes('w=')) {
      return photoUrl.replace('w=50&h=50', 'w=500&h=500').replace('compress,', '')
    }
    return `${ photoUrl }&w=500&h=500`
  }
}

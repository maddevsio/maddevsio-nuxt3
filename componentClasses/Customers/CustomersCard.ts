import type { CustomersCardProps, ICustomersCard } from '~/interfaces/componentInterfaces/Customers/ICustomersCard'

export class CustomersCard implements ICustomersCard {
  backgroundColor = 'black'
  cards = []
  constructor(props: CustomersCardProps) {
    this.backgroundColor = props.primary.backgroundColor || this.backgroundColor
    this.cards = props.items || this.cards

    this.replacePhotoUrl = this.replacePhotoUrl.bind(this)
  }

  replacePhotoUrl = photoUrl => {
    if (photoUrl.includes('w=')) {
      return photoUrl.replace('w=50&h=50', 'w=500&h=500').replace('compress,', '')
    }
    return `${ photoUrl }&w=500&h=500`
  }
}

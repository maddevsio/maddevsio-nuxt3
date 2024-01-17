import type { IIndustriesItem } from '~/interfaces/componentInterfaces/Industries/IIndustries'

export class Industries {
  cards: IIndustriesItem[]

  constructor(props: { cards: IIndustriesItem[] }) {
    this.cards = props.cards
  }
}

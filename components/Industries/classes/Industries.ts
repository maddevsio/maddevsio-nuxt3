import type { IIndustriesItem } from '~/components/Industries/interfaces/IIndustries'

export class Industries {
  cards: IIndustriesItem[]

  constructor(props: { items: IIndustriesItem[] }) {
    this.cards = props.items
  }
}

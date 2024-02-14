import type { IIndustriesItem } from '~/components/PageBlocks/Industries/interfaces/IIndustries'

export class Industries {
  cards: IIndustriesItem[]

  constructor(props: { items: IIndustriesItem[] }) {
    this.cards = props.items
  }
}

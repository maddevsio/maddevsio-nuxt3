import type { BenefitCardsProps, IBenefitCard, IBenefitCards } from '~/components/PageBlocks/Benefit/interfaces/IBenefitCards'

export class BenefitCards implements IBenefitCards {
  background: string | null
  tag: string
  title: string
  cards: IBenefitCard[]

  constructor(props: BenefitCardsProps) {
    this.background = setSliceBackground(props.primary.background || 'white')
    this.tag = props.primary.tag
    this.title = props.primary.text
    this.cards = props.items
  }
}

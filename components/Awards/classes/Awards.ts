import type { AwardsProps, BigCard, IAwards, LittleCard } from '~/components/Awards/interfaces/IAwards'

export class Awards implements IAwards {
  bigCard: BigCard | undefined
  littleCards: LittleCard[]
  background: string | null
  backgroundInText: string | null

  constructor(props: AwardsProps) {
    this.bigCard = props.items.find(card => card.isBig)
    this.littleCards = props.items.filter(card => !card.isBig)
    this.background = setSliceBackground(props.primary.background)
    this.backgroundInText = props.primary.background
  }
}

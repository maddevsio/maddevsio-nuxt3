import type { Ref } from 'vue'
import type {
  ITeamCardsDefault,
  TeamCardsDefaultProps,
  TeamDefaultCard,
} from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsDefault'

export class TeamCardsDefault implements ITeamCardsDefault {
  cards: TeamDefaultCard[]
  hoverCount: Ref<number>
  toggleImage: Ref<boolean>

  constructor(props: TeamCardsDefaultProps) {
    this.hoverCount = ref(0)
    this.toggleImage = ref(true)
    this.cards = props.items
    this.toggleImageHandler = this.toggleImageHandler.bind(this)
  }

  toggleImageHandler() {
    this.hoverCount.value += 1
    if (this.hoverCount.value >= 3) {
      this.toggleImage.value = !this.toggleImage.value
    }
  }
}

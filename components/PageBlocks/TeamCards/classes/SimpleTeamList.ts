import type {
  ISimpleTeamList,
  SimpleTeamListProps,
  TeamCardCaseStudy,
} from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsCaseStudies'
import { SimpleTeamListItem } from '~/components/PageBlocks/TeamCards/classes/SimpleTeamListItem'

export class SimpleTeamList implements ISimpleTeamList {
  cards: TeamCardCaseStudy[]

  constructor(props: SimpleTeamListProps) {
    this.cards = props.cards.map(card => new SimpleTeamListItem(card))
  }
}

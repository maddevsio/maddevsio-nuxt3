import type {
  ISimpleTeamList,
  SimpleTeamListProps,
  TeamCardCaseStudy,
} from '~/components/TeamCards/interfaces/ITeamCardsCaseStudies'
import { SimpleTeamListItem } from '~/components/TeamCards/classes/SimpleTeamListItem'

export class SimpleTeamList implements ISimpleTeamList {
  cards: TeamCardCaseStudy[]

  constructor(props: SimpleTeamListProps) {
    this.cards = props.cards.map(card => new SimpleTeamListItem(card))
  }
}

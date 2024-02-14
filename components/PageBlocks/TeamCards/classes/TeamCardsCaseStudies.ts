import type { ImageField } from '@prismicio/types'
import type {
  ISimpleTeamList,
  ITeamCardsCaseStudies, TeamCardCaseStudy,
  TeamCardsCaseStudiesProps,
} from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsCaseStudies'
import { SimpleTeamList } from '~/components/PageBlocks/TeamCards/classes/SimpleTeamList'

export class TeamCardsCaseStudies implements ITeamCardsCaseStudies {
  teamList: ISimpleTeamList
  backgroundColor: string
  containerSize: string

  constructor(props: TeamCardsCaseStudiesProps) {
    this.backgroundColor = props.primary?.backgroundColor || 'white'
    this.containerSize = props.primary?.containerSize || '1240'
    this.teamList = new SimpleTeamList({ cards: this.transformDataForTeamList(props?.items) })

    this.transformDataForTeamList = this.transformDataForTeamList.bind(this)
  }

  transformDataForTeamList = (items: TeamCardCaseStudy[]) => {
    if (!items.length) { return [] }
    return items.map(item => ({
      ...item,
      image: {
        ...item.image,
        url: `${ item.image.url!.split('?auto')[0] }?auto=format&w=70&h=70&dpr=2`,
      } as ImageField,
      textColor: this.backgroundColor === 'black' ? 'white' : 'black',
      containerSize: this.containerSize || '1240',
    }))
  }
}

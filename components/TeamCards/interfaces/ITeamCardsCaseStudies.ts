import type { ImageField } from '@prismicio/types'

export interface TeamCardCaseStudy {
  name: string
  position: string
  image: ImageField
  textColor: string
  containerSize: string
}

export interface SimpleTeamListProps {
  cards: TeamCardCaseStudy[]
}

export interface SimpleTeamListItemProps extends TeamCardCaseStudy {}

export interface ISimpleTeamListItem extends SimpleTeamListItemProps {}

export interface ISimpleTeamList {
  cards: ISimpleTeamListItem[]
}

export interface TeamCardsCaseStudiesProps {
  items: TeamCardCaseStudy[]
  primary: {
    backgroundColor: string
    containerSize: string
  }
}

export interface ITeamCardsCaseStudies {
  teamList: ISimpleTeamList
  backgroundColor: string
  containerSize: string
  transformDataForTeamList(items: TeamCardCaseStudy[]): TeamCardCaseStudy[]
}

import type { ImageField } from '@prismicio/types'
import type {
  ISimpleTeamListItem,
  SimpleTeamListItemProps,
} from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsCaseStudies'

export class SimpleTeamListItem implements ISimpleTeamListItem {
  name: string
  position: string
  image: ImageField
  textColor: string
  containerSize: string

  constructor({
    name, position, image, textColor, containerSize,
  }: SimpleTeamListItemProps) {
    this.name = name
    this.position = position
    this.image = image
    this.textColor = textColor
    this.containerSize = containerSize
  }
}

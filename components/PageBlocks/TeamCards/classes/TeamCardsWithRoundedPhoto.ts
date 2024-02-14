import type { ImageField } from '@prismicio/types'
import type {
  ITeamCardsWithRoundedPhoto, TeamCardsWithRoundedPhotoProps,
  TransformedTeamCardWithRoundedPhoto,
} from '~/components/PageBlocks/TeamCards/interfaces/ITeamCardsWithRoundedPhoto'

export class TeamCardsWithRoundedPhoto implements ITeamCardsWithRoundedPhoto {
  cards: TransformedTeamCardWithRoundedPhoto[]
  backgroundColor: string
  containerColor: string

  constructor(props: TeamCardsWithRoundedPhotoProps) {
    this.cards = props.items.map((card): TransformedTeamCardWithRoundedPhoto => ({
      ...card,
      image: {
        ...card.image,
        url: card.image.url!.replace('compress,', ''),
      } as ImageField,
      link: checkAndExtractDomain(card.link.url || ''),
      textColor: props.primary.backgroundColor === 'black' ? 'black' : 'white',
    }))
    this.backgroundColor = colorConverterToClass('slice-bg', props.primary.backgroundColor || 'white')
    this.containerColor = colorConverterToClass('bg', props.primary.backgroundColor === 'black' ? 'black' : 'white')
  }
}

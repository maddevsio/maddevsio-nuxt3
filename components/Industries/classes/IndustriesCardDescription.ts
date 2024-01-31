import type { Router } from 'vue-router'
import type {
  IIndustriesCardDescription,
  IIndustriesCardDescriptionItem, IndustriesCardDescriptionProps,
} from '~/components/Industries/interfaces/IIndustriesCardDescription'

export class IndustriesCardDescription implements IIndustriesCardDescription {
  cards: IIndustriesCardDescriptionItem[]
  colorTheme: string
  sliceBackground: string

  constructor(props: IndustriesCardDescriptionProps) {
    this.cards = props.items.map(card => ({
      ...card,
      cardBackgroundColor: colorConverterToClass('bg', props.primary?.colorTheme || 'white'),
      cardTextColor: colorConverterToClass('text', props.primary?.colorTheme === 'white' ? 'black' : 'white'),
    }))
    this.colorTheme = props.primary.colorTheme || 'white'
    this.sliceBackground = colorConverterToClass('slice-bg', props.primary.colorTheme || 'white')
  }

  goToPage = async (url: string, router: Router) => {
    if (!url) { return }
    await router.push(url)
  }
}

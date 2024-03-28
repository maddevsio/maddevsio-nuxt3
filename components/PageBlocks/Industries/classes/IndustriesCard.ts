import type { Router } from 'vue-router'
import type {
  IIndustriesCardItem,
  IndustriesCardProps,
  IIndustriesCard,
} from '~/components/PageBlocks/Industries/interfaces/IIndustriesCard'

export class IndustriesCard implements IIndustriesCard {
  industries: IIndustriesCardItem[]

  colorTheme: string

  colorThemeClassNames: {
    sliceClassNames: string
    cardClassNames: string
    textClassNames: string
  }

  constructor(props: IndustriesCardProps) {
    this.industries = props.items
    this.colorTheme = props.primary.colorTheme || 'black'
    this.colorThemeClassNames = {
      sliceClassNames: colorConverterToClass('slice-bg', this.colorTheme),
      cardClassNames: colorConverterToClass('bg', this.colorTheme),
      textClassNames: colorConverterToClass('text', this.colorTheme === 'white' ? 'black' : 'white'),
    }

    this.goToPage = this.goToPage.bind(this)
  }

  goToPage = async (url: string, router: Router) => {
    if (!url) { return }
    await router.push(url)
  }
}

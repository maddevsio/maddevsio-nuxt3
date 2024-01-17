import { useColorConverterToClass } from '~/utils/useColorConverterToClass'

export interface IIndustriesCard {
  linkToIndustryPage: string
  icon: {
    url: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
  name: string
}

export interface IndustriesCardProps {
  items: IIndustriesCard[]
  primary: {
    colorTheme: string
  }
}

export class IndustriesCard {
  industries: IIndustriesCard[]

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
      sliceClassNames: useColorConverterToClass('slice-bg', this.colorTheme),
      cardClassNames: useColorConverterToClass('bg', this.colorTheme),
      textClassNames: useColorConverterToClass('text', this.colorTheme === 'white' ? 'black' : 'white'),
    }

    this.goToPage = this.goToPage.bind(this)
  }

  goToPage = (url: string, router: {push: (url: string) => void}) => {
    if (!url) { return }
    router.push(url)
  }
}

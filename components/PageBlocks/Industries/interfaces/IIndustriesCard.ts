import type { Router } from 'vue-router'

export interface IIndustriesCardItem {
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
  items: IIndustriesCardItem[]
  primary: {
    colorTheme: string
  }
}

export interface IIndustriesCard {
  industries: IIndustriesCardItem[]
  colorTheme: string
  colorThemeClassNames: {
    sliceClassNames: string
    cardClassNames: string
    textClassNames: string
  }
  goToPage: (url: string, router: Router) => Promise<void>
}

export interface GridLottieWithCaseStudyCard {
  alignText: string
  background: string
  cardType: boolean
  description: string
  file: string
  folder: string
  fullWidth: boolean
  height: string
  link: string
  logoAlt: string
  logoHeight: string
  logoWidth: string
  lottieAnimation: string
  lottieHeight: string
  lottiePosition: string
  poster: string
  subtitle: string
  title: string
  titleTag: string
  video: string
  width: string
}

export interface GridLottieWithCaseStudyTransformedCard extends GridLottieWithCaseStudyCard {
  classNames: {
    all: string | null
    solution: Array<string | null>
    caseStudy: string[]
    textAlignment: string[]
  }
}

export interface GridLottieWithCaseStudyProps {
  items: GridLottieWithCaseStudyCard[]
}

export interface IGridLottieWithCaseStudy {
  cards: GridLottieWithCaseStudyTransformedCard[]
  setClassNames(cards: GridLottieWithCaseStudyCard[]): GridLottieWithCaseStudyTransformedCard[]
}

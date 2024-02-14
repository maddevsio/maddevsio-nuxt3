import type { ImageField, RichTextField } from '@prismicio/types'

export interface StartScreenCaseStudyProps {
  primary: {
    videoPath: string
    poster: ImageField
    title: string
    description: RichTextField
    caseLogoImage: ImageField
    caseTag: string
    clickableCaseTag: boolean
    backgroundOverlay: string
  }
}

export interface IStartScreenCaseStudy {
  videoPath: string
  poster: ImageField
  title: string
  description: RichTextField
  caseLogoImage: ImageField
  caseTag: string
  caseTagEncodedUri: string
  clickableCaseTag: boolean
  backgroundOverlay: string
}

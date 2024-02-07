import type { ImageField, RichTextField } from '@prismicio/types'
import type {
  IStartScreenCaseStudy,
  StartScreenCaseStudyProps,
} from '~/components/StartScreen/interfaces/IStartScreenCaseStudy'

export class StartScreenCaseStudy implements IStartScreenCaseStudy {
  videoPath: string
  poster: ImageField
  title: string
  description: RichTextField
  caseLogoImage: ImageField
  caseTag: string
  caseTagEncodedUri: string
  clickableCaseTag: boolean
  backgroundOverlay: string

  constructor(props: StartScreenCaseStudyProps) {
    this.videoPath = props.primary.videoPath
    this.poster = {
      ...props.primary.poster,
      url: removeCompressFromPrismicImage(props.primary.poster.url!),
    } as ImageField
    this.title = replaceLineSeparatorToBr(props.primary.title)
    this.description = props.primary.description
    this.caseLogoImage = props.primary.caseLogoImage
    this.caseTag = props.primary.caseTag
    this.caseTagEncodedUri = encodeURIComponent(props.primary.caseTag || '')
    this.clickableCaseTag = props.primary.clickableCaseTag
    this.backgroundOverlay = props.primary.backgroundOverlay || 'rgba(0, 0, 0, 0.7)'
  }
}

import type { ImageField, RichTextField } from '@prismicio/types'
import type {
  IStartScreenImageRightAndButton, StartScreenImageRightAndButtonProps,
} from '~/components/StartScreen/interfaces/IStartScreenImageRightAndButton'

export class StartScreenImageRightAndButton implements IStartScreenImageRightAndButton {
  btnText: string
  imageOpacity: number
  sliceBackground: string | null
  sliceGradient: string
  title: RichTextField
  subtitle: RichTextField
  image: ImageField
  rightImage: ImageField
  ebookImage: ImageField
  ebookName: string
  ebookPath: string
  modal: string
  btnLink: string
  sendPulseTemplateId: number

  constructor(props: StartScreenImageRightAndButtonProps) {
    this.btnText = props.primary.btnText || 'Download PDF'
    this.imageOpacity = props.primary.imageOpacity || 0.8
    this.sliceBackground = setSliceBackground(props.primary.background)
    this.sliceGradient = setSliceGradient(props.primary.gradientColor)
    this.title = props.primary.title
    this.subtitle = props.primary.subtitle
    this.image = props.primary.image
    this.rightImage = props.primary.rightImage
    this.ebookImage = props.primary.ebookImage
    this.ebookName = props.primary.ebookName
    this.ebookPath = props.primary.ebookPath
    this.modal = props.primary.modal
    this.btnLink = props.primary.btnLink
    this.sendPulseTemplateId = Number(props.primary.sendPulseTemplateId)
  }
}

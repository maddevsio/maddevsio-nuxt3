import type { ImageField, RichTextField } from '@prismicio/types'

export interface StartScreenImageRightAndButtonProps {
  primary: {
    btnText: string
    imageOpacity: number
    background: string
    gradientColor: string
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
  }
}

export interface IStartScreenImageRightAndButton {
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
}

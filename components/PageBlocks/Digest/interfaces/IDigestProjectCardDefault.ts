import type { BooleanField, ImageField, RichTextField } from '@prismicio/client'

export interface DigestProjectCardDefaultProps {
  primary: {
    image: ImageField
    description: RichTextField
    external: BooleanField
    buttonText: string
    url: string
    showBorderBottom: BooleanField
  },
}

export interface IDigestProjectCardDefault {
  image: ImageField
  description: RichTextField
  external: BooleanField
  buttonText: string
  url: string
  showBorderBottom: BooleanField
}

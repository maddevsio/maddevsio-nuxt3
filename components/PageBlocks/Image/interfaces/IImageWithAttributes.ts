import type { ImageField, RichTextField } from '@prismicio/client'

export interface ImageWithAttributesProps {
  primary: {
    image: ImageField
    url: RichTextField
    target: string
  }
}

export interface IImageWithAttributes {
  image: ImageField
  url: RichTextField
  target: string
  rel: string | null
}

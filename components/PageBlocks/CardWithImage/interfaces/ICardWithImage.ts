import type { ImageField, RichTextField } from '@prismicio/types'

export interface CardWithImageProps {
  primary: {
    title: RichTextField
    description: string
    backgroundColor: string
    textColor: string
    image: ImageField
  }
}

export interface ICardWithImage {
  title: RichTextField
  description: string
  background: string | null
  textColor: string
  image: ImageField
  haveImage(): boolean
}

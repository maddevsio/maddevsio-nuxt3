import type { ImageField } from '@prismicio/types'

export interface StartScreenDefaultProps {
  primary: {
    imageOpacity: string
    background: string
    gradientColor: string
    title: string
    subtitle: string
    image: ImageField
  }
}

export interface IStartScreenDefault {
  imageOpacity: number
  background: string | null
  gradient: string
  title: string
  subtitle: string
  image: ImageField
}

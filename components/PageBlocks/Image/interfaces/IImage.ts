import type { ImageField } from '@prismicio/types'

export interface ImageSliceProps {
  primary: {
    colorTheme: string
    image: ImageField
  }
}

export interface IImageSlice {
  backgroundColor: string | null
  image: ImageField
}

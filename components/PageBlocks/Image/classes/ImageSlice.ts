import type { ImageField } from '@prismicio/types'
import type { IImageSlice, ImageSliceProps } from '~/components/PageBlocks/Image/interfaces/IImage'

export class ImageSlice implements IImageSlice {
  backgroundColor: string | null
  image: ImageField

  constructor(props: ImageSliceProps) {
    this.backgroundColor = setSliceBackground(props.primary.colorTheme || 'white')
    this.image = props.primary.image
  }
}

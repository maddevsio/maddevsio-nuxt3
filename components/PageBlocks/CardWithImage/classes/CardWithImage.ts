import type { ImageField, RichTextField } from '@prismicio/types'
import type { CardWithImageProps, ICardWithImage } from '~/components/PageBlocks/CardWithImage/interfaces/ICardWithImage'

export class CardWithImage implements ICardWithImage {
  title: RichTextField
  description: string
  background: string | null
  textColor: string
  image: ImageField

  constructor(props: CardWithImageProps) {
    this.title = props.primary.title
    this.description = props.primary.description || ''
    this.background = setSliceBackground(props.primary.backgroundColor || 'silver')
    this.textColor = setSliceTextColor(props.primary.textColor || 'black')
    this.image = props.primary.image
    this.haveImage = this.haveImage.bind(this)
  }

  haveImage() {
    return Object.keys(this.image).length !== 0
  }
}

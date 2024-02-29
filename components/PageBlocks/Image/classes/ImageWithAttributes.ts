import type { ImageField, RichTextField } from '@prismicio/client'
import type {
  IImageWithAttributes,
  ImageWithAttributesProps,
} from '~/components/PageBlocks/Image/interfaces/IImageWithAttributes'

export class ImageWithAttributes implements IImageWithAttributes {
  image: ImageField
  url: RichTextField
  target: string
  rel: string | null

  constructor(props: ImageWithAttributesProps) {
    this.image = props.primary?.image
    this.url = props.primary?.url
    this.target = props.primary?.target || '_blank'
    this.rel = this.target === '_blank' ? 'noopener' : null
  }
}

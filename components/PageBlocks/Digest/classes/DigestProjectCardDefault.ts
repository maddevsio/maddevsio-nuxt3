import type { BooleanField, ImageField, RichTextField } from '@prismicio/client'
import type {
  DigestProjectCardDefaultProps,
  IDigestProjectCardDefault,
} from '~/components/PageBlocks/Digest/interfaces/IDigestProjectCardDefault'

export class DigestProjectCardDefault implements IDigestProjectCardDefault {
  image: ImageField
  description: RichTextField
  external: BooleanField
  buttonText: string
  url: string
  showBorderBottom: BooleanField

  constructor(props: DigestProjectCardDefaultProps) {
    this.image = props.primary?.image
    this.description = props.primary?.description
    this.external = props.primary?.external || false
    this.buttonText = props.primary?.buttonText || 'Explore'
    this.url = props.primary?.url || ''
    this.showBorderBottom = props.primary?.showBorderBottom || false
  }
}

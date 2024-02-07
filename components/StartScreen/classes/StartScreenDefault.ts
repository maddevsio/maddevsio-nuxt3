import type { ImageField } from '@prismicio/types'
import type {
  IStartScreenDefault,
  StartScreenDefaultProps,
} from '~/components/StartScreen/interfaces/IStartScreenDefault'

export class StartScreenDefault implements IStartScreenDefault {
  imageOpacity: string
  background: string | null
  gradient: string
  title: string
  subtitle: string
  image: ImageField

  constructor(props: StartScreenDefaultProps) {
    this.imageOpacity = props.primary.imageOpacity || 0.8
    this.image = props.primary.image
    this.background = setSliceBackground(props.primary.background)
    this.gradient = setSliceGradient(props.primary.gradientColor)
    this.title = props.primary.title
    this.subtitle = props.primary.subtitle
  }
}

import type { ImageField } from '@prismicio/client'
import type {
  ExpertsWithInfoProps,
  IExpertsWithInfo,
} from '~/components/PageBlocks/CtaBanner/interfaces/IExpertsWithInfo'

export class ExpertsWithInfo implements IExpertsWithInfo {
  colorTheme: string
  title: string
  description: string
  buttonText: string
  expertsImage: ImageField

  constructor(props: ExpertsWithInfoProps) {
    this.colorTheme = colorConverterToClass('slice-bg', props.primary.colorTheme || 'white')
    this.title = replaceLineSeparatorToBr(props.primary.title)
    this.description = replaceLineSeparatorToBr(props.primary.description)
    this.buttonText = props.primary.buttonText || 'Contact us'
    this.expertsImage = props.primary.expertsImage
  }
}

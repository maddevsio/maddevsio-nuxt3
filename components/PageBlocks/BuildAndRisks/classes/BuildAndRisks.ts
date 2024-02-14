import type { ImageField, RichTextField } from '@prismicio/types'
import type { BuildAndRisksProps, IBuildAndRisks } from '~/components/PageBlocks/BuildAndRisks/interfaces/IBuildAndRisks'

export class BuildAndRisks implements IBuildAndRisks {
  buttonLink: string
  buttonText: string
  description: RichTextField
  image: ImageField
  backgroundColor: string | null
  outerBgColor: string | null
  buttonTextColor: string
  textColor: string
  buttonBgColor: string | null
  title: RichTextField

  constructor(props: BuildAndRisksProps) {
    this.buttonLink = props.primary.buttonLink.url!
    this.buttonText = props.primary.buttonText
    this.description = props.primary.description
    this.image = props.primary.image
    this.backgroundColor = setSliceBackground(props.primary.backgroundColor)
    this.outerBgColor = setSliceBackground(props.primary.outerBgColor || 'black')
    this.buttonTextColor = setSliceTextColor(props.primary.buttonTextColor || 'grey')
    this.textColor = setSliceTextColor(props.primary.textColor)
    this.buttonBgColor = setSliceBackground(props.primary.buttonBgColor)
    this.title = props.primary.title
  }
}

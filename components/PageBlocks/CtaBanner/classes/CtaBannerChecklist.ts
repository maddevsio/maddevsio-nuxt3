import type { ImageField } from '@prismicio/types'
import type {
  CtaBannerChecklistProps,
  ICtaBannerChecklist,
} from '~/components/PageBlocks/CtaBanner/interfaces/ICtaBannerChecklist'

export class CtaBannerChecklist implements ICtaBannerChecklist {
  image: ImageField
  title: string
  description: string
  btnText: string
  btnLink: string
  colorClassNames: {
    containerBackground: string
    sliceBackground: string
    textColor: string
  }

  constructor(props: CtaBannerChecklistProps) {
    this.image = {
      ...props.primary.image,
      url: removeCompressFromPrismicImage(props.primary.image.url!),
    } as ImageField
    this.title = replaceLineSeparatorToBr(props.primary.title || '')
    this.description = props.primary.description || ''
    this.btnText = props.primary.btnText || 'See all checklists'
    this.btnLink = props.primary.btnLink.url || 'https://maddevs.io/checklists/'
    this.colorClassNames = {
      sliceBackground: colorConverterToClass('slice-bg', props.primary.backgroundColor || 'white'),
      containerBackground: colorConverterToClass('bg', props.primary.backgroundColor || 'white'),
      textColor: colorConverterToClass(
        'text',
        props.primary.backgroundColor === null || props.primary.backgroundColor === 'white' ? 'black' : 'white',
      ),
    }
  }
}

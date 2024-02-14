import type { ImageField } from '@prismicio/types'
import type {
  IStartScreenChecklist,
  StartScreenChecklistProps,
} from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenChecklist'

export class StartScreenChecklist implements IStartScreenChecklist {
  backgroundColor: string
  image: ImageField
  checklistImage: ImageField
  title: string
  buttonText: string
  checklistPdfPath: string
  sendpulseTemplateID: number
  checklistName: string
  checklistFormUID: string

  constructor(props: StartScreenChecklistProps) {
    this.backgroundColor = colorConverterToClass('slice-bg', props.primary.background || 'black')
    this.image = props.primary.image
    this.checklistImage = {
      ...props.primary.checklistImage,
      url: removeCompressFromPrismicImage(props.primary.checklistImage.url!),
    } as ImageField
    this.title = replaceLineSeparatorToBr(props.primary.title || '')
    this.buttonText = props.primary.buttonText
    this.checklistPdfPath = props.primary.checklistPdfPath
    this.sendpulseTemplateID = Number(props.primary.sendpulseTemplateID)
    this.checklistName = props.primary.checklistName
    this.checklistFormUID = createUID(props.primary.checklistName)
  }
}

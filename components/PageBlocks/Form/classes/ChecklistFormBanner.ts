import type { ImageField } from '@prismicio/client'
import type {
  ChecklistFormBannerProps,
  IChecklistFormBanner,
} from '~/components/PageBlocks/Form/interfaces/IChecklistFormBanner'

export class ChecklistFormBanner implements IChecklistFormBanner {
  title: string
  buttonText: string
  checklistImage: ImageField
  checklistName: string
  checklistPdfPath: string
  sendpulseTemplateID: string
  emailTitle: string

  constructor(props: ChecklistFormBannerProps) {
    this.title = replaceLineSeparatorToBr(props.primary.title || 'Fill out the short form and download the checklist')
    this.buttonText = props.primary.buttonText || 'Send me the checklist'
    this.checklistImage = {
      ...props.primary.checklistImage,
      url: props.primary.checklistImage?.url?.replace('compress,', ''),
    } as ImageField
    this.checklistName = props.primary.checklistName
    this.checklistPdfPath = props.primary.checklistPdfPath
    this.sendpulseTemplateID = props.primary.sendPulseTemplateID
    this.emailTitle = props.primary.emailTitle
  }
}

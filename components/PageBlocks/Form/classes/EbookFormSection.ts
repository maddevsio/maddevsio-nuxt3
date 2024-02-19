import type { ImageField } from '@prismicio/types'
import type { RTNode } from '@prismicio/client'
import type {
  EbookFormSectionProps,
  IEbookFormSection,
} from '~/components/PageBlocks/Form/interfaces/IEbookFormSection'

export class EbookFormSection implements IEbookFormSection {
  title: RTNode[]
  image: ImageField
  ebookPath: string
  ebookName: string
  containerSize: string
  sendPulseTemplateId: number

  constructor(props: EbookFormSectionProps) {
    this.title = props.primary?.title
    this.image = props.primary?.image
    this.ebookPath = props.primary?.ebookPath
    this.ebookName = props.primary?.ebookName
    this.containerSize = props.primary?.containerSize || '1026'
    this.sendPulseTemplateId = Number(props.primary?.sendPulseTemplateId)
  }
}

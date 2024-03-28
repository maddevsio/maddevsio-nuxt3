import type { ImageField } from '@prismicio/types'
import type { RTNode } from '@prismicio/client'

export interface EbookFormSectionProps {
  primary: {
    title: RTNode[]
    image: ImageField
    ebookPath: string
    ebookName: string
    containerSize: string
    sendPulseTemplateId: string
  }
}

export interface IEbookFormSection {
  title: RTNode[]
  image: ImageField
  ebookPath: string
  ebookName: string
  containerSize: string
  sendPulseTemplateId: number
}

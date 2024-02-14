import type { ImageField } from '@prismicio/types'

export interface StartScreenChecklistProps {
  primary: {
    background: string
    image: ImageField
    checklistImage: ImageField
    title: string
    buttonText: string
    checklistPdfPath: string
    sendpulseTemplateID: number
    checklistName: string
  }
}

export interface IStartScreenChecklist {
  backgroundColor: string
  image: ImageField
  checklistImage: ImageField
  title: string
  buttonText: string
  checklistPdfPath: string
  sendpulseTemplateID: number
  checklistName: string
  checklistFormUID: string
}

import type { ImageField } from '@prismicio/client'

export interface ChecklistFormBannerProps {
  primary: {
    title: string
    buttonText: string
    checklistImage: ImageField
    checklistName: string
    checklistPdfPath: string
    sendPulseTemplateID: string
  }
}

export interface IChecklistFormBanner {
  title: string
  buttonText: string
  checklistImage: ImageField
  checklistName: string
  checklistPdfPath: string
  sendpulseTemplateID: string
}

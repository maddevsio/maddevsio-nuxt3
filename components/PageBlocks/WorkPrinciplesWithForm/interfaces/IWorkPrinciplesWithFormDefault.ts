import type { ImageField } from '@prismicio/types'

export interface WorkPrinciplesWithFormListItem {
  icon: ImageField,
  description: string
}

export interface WorkPrinciplesWithFormDefaultProps {
  primary: {
    colorTheme: string
    formTitle: string
    buttonText: string
    listTitle: string
  },
  items: WorkPrinciplesWithFormListItem[]
}

export interface IWorkPrinciplesWithFormDefault {
  colorTheme: string
  formTitle: string
  formButtonText: string
  listTitle: string
  listItems: WorkPrinciplesWithFormListItem[]
  backgroundColorClass: string
}

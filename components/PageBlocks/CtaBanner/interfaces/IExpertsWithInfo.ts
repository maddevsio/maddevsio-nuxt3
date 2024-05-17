import type { ImageField } from '@prismicio/client'

export interface ExpertsWithInfoProps {
  primary: {
    colorTheme: string
    title: string
    description: string
    buttonText: string
    expertsImage: ImageField
  }
}

export interface IExpertsWithInfo {
  colorTheme: string
  title: string
  description: string
  buttonText: string
  expertsImage: ImageField
}

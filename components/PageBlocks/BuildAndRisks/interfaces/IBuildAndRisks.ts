import type { ImageField, RichTextField } from '@prismicio/types'

export interface BuildAndRisksProps {
  primary: {
    buttonLink: {
      url?: string
      type: string
    }
    buttonText: string
    description: RichTextField
    image: ImageField
    backgroundColor: string
    outerBgColor: string
    buttonTextColor: string
    textColor: string
    buttonBgColor: string
    title: RichTextField
  }
}

export interface IBuildAndRisks {
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
}

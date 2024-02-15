import type { FilledLinkToWebField, ImageField } from '@prismicio/types'

export interface CtaBannerChecklistProps {
  primary: {
    image: ImageField
    title: string
    description: string
    btnText: string
    btnLink: FilledLinkToWebField
    backgroundColor: string
  }
}

export interface ICtaBannerChecklist {
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
}

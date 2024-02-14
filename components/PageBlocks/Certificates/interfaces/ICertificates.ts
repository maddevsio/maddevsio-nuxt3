import type { ImageField, RichTextField } from '@prismicio/types'

export interface CertificateProps {
  item: {
    title: string
    titleTag: string
    image: ImageField
    description: RichTextField
    validationToken: string
    validationLink: {
      url: string
      type: string
    }
  }
  backgroundColor: string | null
}

export interface ICertificate {
  title: string
  titleTag: string
  image: ImageField
  description: RichTextField
  validationToken: string
  validationLink: {
    url: string
    type: string
  }
  colorTheme: string
  copyIconColor: string
  arrowColor: string
}

export interface CertificatesProps {
  primary: {
    backgroundColor: string
    title: string
    titleTag: string
    titleColor: string
  }
  items: CertificateProps['item'][]
}

export type TitleClass = string | { [className: string]: boolean };

export interface ICertificates {
  backgroundColor: string | null
  title: string
  titleTag: string
  titleColor: string
  certificates: ICertificate[]
  backgroundColorClass: string
  titleClasses: TitleClass[]
}

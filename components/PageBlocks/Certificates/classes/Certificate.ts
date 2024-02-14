import type { ImageField, RichTextField } from '@prismicio/types'
import type { CertificateProps, ICertificate } from '~/components/PageBlocks/Certificates/interfaces/ICertificates'

export class Certificate implements ICertificate {
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

  constructor({ item, backgroundColor }: CertificateProps) {
    this.title = item.title || ''
    this.titleTag = item.titleTag || 'h3'
    this.image = item.image
    this.description = item.description || ''
    this.validationToken = item.validationToken || ''
    this.validationLink = item.validationLink
    this.colorTheme = backgroundColor || 'white'

    this.copyIconColor = this.colorTheme === 'white' ? '#707072' : '#a0a0a1'
    this.arrowColor = this.colorTheme === 'white' ? '#111' : '#fff'
  }
}

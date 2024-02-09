import type {
  CertificatesProps,
  ICertificate,
  ICertificates,
  TitleClass,
} from '~/components/Certificates/interfaces/ICertificates'
import { Certificate } from '~/components/Certificates/classes/Certificate'

export class Certificates implements ICertificates {
  backgroundColor: string | null
  title: string
  titleTag: string
  titleColor: string
  certificates: ICertificate[]
  backgroundColorClass: string
  titleClasses: TitleClass[]

  constructor(props: CertificatesProps) {
    this.backgroundColor = props?.primary?.backgroundColor || 'black'
    this.title = props?.primary?.title
    this.titleTag = props?.primary?.titleTag || 'h2'
    this.titleColor = props?.primary?.titleColor
    this.certificates = props.items.map(item => new Certificate({ item, backgroundColor: props?.primary?.backgroundColor }))

    this.backgroundColorClass = colorConverterToClass('slice-bg', this.backgroundColor)
    this.titleClasses = [
      colorConverterToClass('text', this.titleColor),
      { 'certificates-slice__title--full-width': this.certificates.length > 1 },
    ]
  }
}

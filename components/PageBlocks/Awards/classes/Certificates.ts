import type {
  Certificate,
  CertificatesProps,
  ICertificates,
} from '~/components/PageBlocks/Awards/interfaces/ICertificates'

export class Certificates implements ICertificates {
  certificates: Certificate[]
  sliceBackground: string | null
  background: string

  constructor(props: CertificatesProps) {
    this.certificates = props.items || []
    this.sliceBackground = setSliceBackground(props.primary.background)
    this.background = props.primary.background
  }
}

import type { ImageField } from '@prismicio/types'

export interface Certificate {
  link: {
    url: string
  }
  image: ImageField
}

export interface CertificatesProps {
  items: Certificate[]
  primary: {
    background: string
  }
}

export interface ICertificates {
  certificates: Certificate[]
  sliceBackground: string | null
  background: string
}

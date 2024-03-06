import type { SelectField } from '@prismicio/types'

export interface SubscribeFormDigestProps {
  variation: string
  primary: {
    backgroundColor: SelectField
    title: string
    subtitle: string
  }
}
export interface ISubscribeFormDigest {
  backgroundColor: SelectField
  title: string
  subtitle: string
  sliceVariation: string
  textColor: string
}

import type { SelectField } from '@prismicio/types'
import type {
  ISubscribeFormDigest,
  SubscribeFormDigestProps,
} from '~/components/PageBlocks/SubscribeForm/interfaces/ISubscribeFormDigest'

export class SubscribeFormDigest implements ISubscribeFormDigest {
  backgroundColor: SelectField
  title: string
  subtitle: string
  sliceVariation: string
  textColor: string

  constructor(props: SubscribeFormDigestProps) {
    this.sliceVariation = props.variation
    this.backgroundColor = props.primary?.backgroundColor || 'white'
    this.title = props?.primary?.title || 'Get monthly newsletter'
    this.subtitle = props.primary?.subtitle || 'All the most interesting from Mad Devs of the month in one short letter.'
    this.textColor = this.backgroundColor === 'white' ? 'black' : 'white'
  }
}

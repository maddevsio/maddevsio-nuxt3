import type {
  IKeyPointCardDefault,
  KeyPointCardProps,
} from '~/components/PageBlocks/KeyPointCard/interfaces/IKeyPointCardDefault'

export class KeyPointCardDefault implements IKeyPointCardDefault {
  title: string
  description: string

  constructor(props: KeyPointCardProps) {
    this.title = props.primary?.title
    this.description = props.primary?.description
  }
}

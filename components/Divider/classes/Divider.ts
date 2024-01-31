import type { DividerProps, IDivider } from '~/components/Divider/interfaces/IDivider'

export class Divider implements IDivider {
  sliceBackground: string | null
  backgroundInText: string
  dividerHeight: string

  constructor(props: DividerProps) {
    this.sliceBackground = setSliceBackground(props.primary.background || 'black')
    this.backgroundInText = props.primary.background || 'black'
    this.dividerHeight = props.primary.dividerHeight || '1px'
  }
}

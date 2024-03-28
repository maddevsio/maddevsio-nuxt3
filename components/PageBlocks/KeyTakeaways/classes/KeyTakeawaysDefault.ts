import type { KeyTextField, SelectField } from '@prismicio/client'
import type {
  IKeyTakeawaysDefault,
  KeyTakeawaysDefaultProps,
} from '~/components/PageBlocks/KeyTakeaways/interfaces/IKeyTakeawaysDefault'

export class KeyTakeawaysDefault implements IKeyTakeawaysDefault {
  colorTheme: SelectField
  items: {
    text: KeyTextField
  }[]

  backgroundColorClass: string
  textColor: string

  constructor(props: KeyTakeawaysDefaultProps) {
    this.colorTheme = props?.primary?.colorTheme || 'white'
    this.items = props?.items
    this.backgroundColorClass = colorConverterToClass('bg', this.colorTheme)
    this.textColor = this.colorTheme === 'black' ? 'white' : 'black'
  }
}

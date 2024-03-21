import type { KeyTextField, SelectField } from '@prismicio/client'

export interface KeyTakeawaysDefaultProps {
  primary: {
    colorTheme: SelectField
  }
  items: {
    text: KeyTextField
  }[]
}
export interface IKeyTakeawaysDefault {
 colorTheme: SelectField
  items: {
    text: KeyTextField
  }[]
  backgroundColorClass: string
  textColor: string
}

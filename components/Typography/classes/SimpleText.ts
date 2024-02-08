import type { ISimpleText, SimpleTextProps } from '~/components/Typography/interfaces/ISimpleText'

export class SimpleText implements ISimpleText {
  text: string
  colorThemeClass: string
  sliceBackground: string | null

  constructor(props: SimpleTextProps) {
    this.text = props.primary.text
    this.sliceBackground = setSliceBackground(props.primary.colorTheme || 'white')
    this.colorThemeClass = props.primary.colorTheme === 'black' ? 'text-slice--black-theme' : 'text-slice--white-theme'
  }
}

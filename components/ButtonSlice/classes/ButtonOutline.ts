import type { ButtonOutlineProps, IButtonOutline } from '~/components/ButtonSlice/interfaces/IButtonOutline'

export class ButtonOutline implements IButtonOutline {
  fullWidthClassName: string
  background: string
  buttonBackgroundColorClassName: string
  alignment: string
  buttonText: string
  buttonLink: string
  maxWidth: string | number

  constructor(props: ButtonOutlineProps) {
    this.fullWidthClassName = props.primary.fullWidth ? 'ui-outlined-button--full-width' : ''
    this.background = props.primary.background || 'white'
    this.buttonBackgroundColorClassName = this.getButtonBackgroundColorClassName(props.primary.color || 'red')
    this.alignment = props.primary.alignment || 'center'
    this.buttonText = props.primary.text || 'Show more'
    this.buttonLink = props.primary.link.url || 'https://maddevs.io'
    this.maxWidth = props.primary.maxWidth || ''
  }

  getButtonBackgroundColorClassName(color: string) {
    switch (color) {
    case 'red': return 'ui-outlined-button--red'
    case 'grey': return 'ui-outlined-button--grey'
    case 'black': return 'ui-outlined-button--black'
    case 'blue': return 'ui-outlined-button--blue'
    default: return ''
    }
  }
}

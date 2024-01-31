import type { IOutlinedLightButton } from '~/components/ButtonSlice/interfaces/IOutlinedLightButton'

export class OutlinedLightButton implements IOutlinedLightButton {
  sliceBackground: string
  fullWidth: boolean
  typeOfLink: string
  buttonText: string
  internalLink: string
  externalLink: string
  maxWidth: string

  constructor(props) {
    this.sliceBackground = setSliceBackground(props.primary.background || 'black')
    this.fullWidth = props.primary.fullWidth === null ? true : props.primary.fullWidth
    this.typeOfLink = props.primary.typeLink === null ? 'internal' : 'external'
    this.buttonText = props.primary.text || ''
    this.internalLink = props.primary.internalLink || '#'
    this.externalLink = props.primary.link?.url || '#'
    this.maxWidth = props.primary.maxWidth
  }
}

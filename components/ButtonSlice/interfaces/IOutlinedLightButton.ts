export interface OutlinedLightButtonProps {
  primary: {
    sliceBackground: string
    fullWidth: boolean
    typeLink: string
    buttonText: string
    internalLink: string
    externalLink: string | { url?: string }
    maxWidth: string
  }
}

export interface IOutlinedLightButton {
  sliceBackground: string
  fullWidth: boolean
  typeOfLink: string
  buttonText: string
  internalLink: string
  externalLink: string
  maxWidth: string
}

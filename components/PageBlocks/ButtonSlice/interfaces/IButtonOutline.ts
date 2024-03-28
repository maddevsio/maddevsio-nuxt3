export interface ButtonOutlineProps {
  primary: {
    fullWidth: boolean
    background: string
    color: string
    alignment: string
    text: string
    link: { url: string }
    maxWidth: string | number
  }
}

export interface IButtonOutline {
  fullWidthClassName: string
  background: string
  buttonBackgroundColorClassName: string
  alignment: string
  buttonText: string
  buttonLink: string
  maxWidth: string | number
  getButtonBackgroundColorClassName(color: string): string
}

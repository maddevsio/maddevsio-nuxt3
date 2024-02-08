export interface FlexibleParagraphProps {
  primary: {
    type: string
    colorTheme: string
    text: string
    maxWidth: string
    tag: string
    position: string
    fontWeight: string
    textAlign: string
  }
}

export interface IFlexibleParagraph {
  type: string
  colorTheme: string
  text: string
  maxWidth: string
  tag: string
  position: string
  fontWeight: string
  textAlign: string
  cssVars: {
    '--font-weight': string
    '--text-align': string
    '--max-width': string
  }
  textSizesClassnames: string[]
}

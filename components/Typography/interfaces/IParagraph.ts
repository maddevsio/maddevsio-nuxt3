export interface ParagraphProps {
  primary: {
    text: string
    maxWidth: string
    colorTheme: string
    position: string
    type: string
    'size-xl': string
    'size-lg': string
    'size-md': string
    'size-sm': string
    'size-xs': string
  }
}

export interface IParagraph {
  text: string
  maxWidth: string
  background: string | null
  position: string
  themeColorClass: string
  paragraphType: string
  textSizesClassnames: string[]
}

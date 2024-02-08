export interface SimpleTextProps {
  primary: {
    colorTheme: string
    text: string
  }
}

export interface ISimpleText {
  text: string
  colorThemeClass: string
  sliceBackground: string | null
}

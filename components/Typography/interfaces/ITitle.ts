export interface TitleProps {
  primary: {
    title: string
    showAnchorLink: boolean
    maxWidth: string
    position: string
    tag: string
    colorTheme: string
    'size-xl': string
    'size-lg': string
    'size-md': string
    'size-sm': string
    'size-xs': string
  }
}

export interface ITitle {
  title: string
  showAnchorLink: boolean
  maxWidth: string
  position: string
  headerTag: string
  background: string | null
  themeColorClass: string
  textSizesClassnames: string[]
}

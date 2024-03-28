import type { ITitle, TitleProps } from '~/components/Typography/interfaces/ITitle'
import { getTextClassNames, getTextSizes } from '~/components/Typography/helpers/textHelpers'

export class Title implements ITitle {
  title: string
  showAnchorLink: boolean
  maxWidth: string
  position: string
  headerTag: string
  background: string | null
  themeColorClass: string
  textSizesClassnames: string[]

  constructor(props: TitleProps) {
    this.title = props.primary.title || ''
    this.showAnchorLink = props.primary.showAnchorLink || false
    this.maxWidth = props.primary.maxWidth || '1240px'
    this.position = props.primary.position || 'left'
    this.headerTag = props.primary.tag || 'h2'
    this.background = setSliceBackground(props.primary.colorTheme || 'black')
    this.themeColorClass = getThemeColorClass('title-wrapper', props.primary.colorTheme || 'black')
    this.textSizesClassnames = getTextClassNames(getTextSizes(props.primary), 'title')
  }
}

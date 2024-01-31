import type { ComputedRef, Ref } from 'vue'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export interface ITitleAndDescription {
  sectionIdForToc: string
  title: string
  titleTag: string
  titleFontSize: string
  titleFontSizeLaptop: string
  titleFontSizeTablet: string
  titleFontSizeMobile: string
  titleLineHeight: string
  titleTextColor: string
  description: string
  descriptionColor: string
  descriptionLocation: string
  backgroundColor: string
  textPosition: string
  cssVars: ComputedRef<{ [key: string]: string }>
  fontsLoaded: Ref<boolean>
  sectionRef: Ref<Element | null>
  observer: Ref<IntersectionObserverInstance | null>
  reformattedTitle: string | string[]
  reformattedDescription: string | string[]
  contentClassNames: ComputedRef<(string | false)[]>

  getCssVars: () => ComputedRef<{ [key: string]: string }>
  reformatToHtml: (text: string, type: string) => string | string[]
  getContentClassNames: (options: { textPosition?: string; descriptionLocation?: 'row' | 'column' }) => any
  initIntersectionObserverForSections: (func: (anchor: string) => void, activeAnchor: Ref<string>) => void
  updateFontsLoaded: () => void
}

export interface TitleAndDescriptionPropTypes {
  primary: {
    sectionIdForToc: string
    title: string
    titleTag: string
    titleFontSize: string
    titleFontSizeLaptop: string
    titleFontSizeTablet: string
    titleFontSizeMobile: string
    titleLineHeight: string
    titleTextColor: string
    description: string
    descriptionColor: string
    descriptionLocation: string
    backgroundColor: string
    textPosition: string
  }
}

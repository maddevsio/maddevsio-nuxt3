import { computed, markRaw, ref } from 'vue'
import type {
  ITitleAndDescription,
  TitleAndDescriptionPropTypes,
} from '~/interfaces/componentInterfaces/TitleAndDescription/ITitleAndDescription'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class TitleAndDescription implements ITitleAndDescription {
  private classNames = {
    contentCenter: 'title-and-description__content--center',
    contentDirection: {
      column: 'title-and-description__content--column',
      row: 'title-and-description__content--row',
    },
  }

  private defaultOptions = {
    titleTag: 'h2',
    fontSizes: {
      desktop: '60px',
      laptop: '45px',
      tablet: '31px',
      mobile: '31px',
    },
    lineHeight: '117%',
    titleTextColor: 'white',
    descriptionColor: 'white',
    descriptionLocation: {
      column: 'column',
      row: 'row',
    },
    backgroundColor: 'black',
    textPosition: 'left',
  }

  private intersectionOptions = {
    rootMargin: '0px 0px -40%',
  }

  public sectionIdForToc: string
  public title: string
  public titleTag: string
  public titleFontSize: string
  public titleFontSizeLaptop: string
  public titleFontSizeTablet: string
  public titleFontSizeMobile: string
  public titleLineHeight: string
  public titleTextColor: string
  public description: string
  public descriptionColor: string
  public descriptionLocation: string
  public backgroundColor: string
  public textPosition: string
  public reformattedTitle
  public reformattedDescription
  public contentClassNames

  public cssVars
  public fontsLoaded
  public sectionRef
  public observer

  constructor(props: TitleAndDescriptionPropTypes) {
    this.sectionIdForToc = props.primary.sectionIdForToc
    this.title = props.primary.title || ''
    this.titleTag = props.primary.titleTag || this.defaultOptions.titleTag
    this.titleFontSize = props.primary.titleFontSize || this.defaultOptions.fontSizes.desktop
    this.titleFontSizeLaptop = props.primary.titleFontSizeLaptop || this.defaultOptions.fontSizes.laptop
    this.titleFontSizeTablet = props.primary.titleFontSizeTablet || this.defaultOptions.fontSizes.tablet
    this.titleFontSizeMobile = props.primary.titleFontSizeMobile || this.defaultOptions.fontSizes.mobile
    this.titleLineHeight = props.primary.titleLineHeight || this.defaultOptions.lineHeight
    this.titleTextColor = props.primary.titleTextColor || this.defaultOptions.titleTextColor
    this.description = props.primary.description || ''
    this.descriptionColor = props.primary.descriptionColor || this.defaultOptions.descriptionColor
    this.descriptionLocation = props.primary.descriptionLocation
      ? this.defaultOptions.descriptionLocation.column
      : this.defaultOptions.descriptionLocation.row
    this.backgroundColor = props.primary.backgroundColor || this.defaultOptions.backgroundColor
    this.textPosition = props.primary.textPosition || this.defaultOptions.textPosition

    this.cssVars = this.getCssVars()
    this.fontsLoaded = ref(false)
    this.sectionRef = ref<Element | null>(null)
    this.observer = ref<IntersectionObserverInstance | null>(null)
    // this.horizontalAnchorActiveGlobal = inject('horizontalAnchorActiveGlobal')

    this.reformattedTitle = this.reformatToHtml(props.primary.title, 'title')
    this.reformattedDescription = this.reformatToHtml(props.primary.description, 'desc')
    this.contentClassNames = this.getContentClassNames({
      textPosition: this.textPosition,
      descriptionLocation: this.descriptionLocation,
    })

    this.getCssVars = this.getCssVars.bind(this)
    this.reformatToHtml = this.reformatToHtml.bind(this)
    this.getContentClassNames = this.getContentClassNames.bind(this)
    this.initIntersectionObserverForSections = this.initIntersectionObserverForSections.bind(this)
    this.updateFontsLoaded = this.updateFontsLoaded.bind(this)

    markRaw(this)
  }

  getCssVars() {
    return computed(() => ({
      '--titleFontSize': `${ this.titleFontSize }`,
      '--titleFontSizeLaptop': `${ this.titleFontSizeLaptop }`,
      '--titleFontSizeTablet': `${ this.titleFontSizeTablet }`,
      '--titleFontSizeMobile': `${ this.titleFontSizeMobile }`,
      '--titleLineHeight': `${ this.titleLineHeight }`,
    }))
  }

  reformatToHtml = (text: string, type = 'title') => {
    if (type === 'title' && text) { return text.replace(/\n/g, '<br />') }
    if (type === 'desc' && text) { return text.split(/\n/g) }
    return text
  }

  getContentClassNames = ({ textPosition = 'left', descriptionLocation = 'row' }) =>
    computed(() =>
      [
        textPosition === 'center' && descriptionLocation !== 'row' && this.classNames.contentCenter,
        descriptionLocation === this.defaultOptions.descriptionLocation.column
          ? this.classNames.contentDirection.column
          : this.classNames.contentDirection.row,
      ].filter(Boolean),
    )

  initIntersectionObserverForSections() {
    this.observer.value = new IntersectionObserver(entries => {
      // eslint-disable-next-line
      entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        //   const targetId = entry.target.id ? entry.target.id.split('_')[0].toLowerCase() : ''
        //   if (targetId && this.horizontalAnchorActiveGlobal.anchorActiveGlobal.value.toLowerCase() !== targetId) {
        //     this.horizontalAnchorActiveGlobal.updateAnchorActiveGlobal(targetId)
        //   }
        // }
      })
    }, this.intersectionOptions)
    if (this.sectionRef.value) {
      this.observer.value.observe(this.sectionRef.value)
    }
  }

  updateFontsLoaded() {
    this.fontsLoaded.value = true
  }
}

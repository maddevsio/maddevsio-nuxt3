import type { Router } from 'vue-router'
import type { Ref } from 'vue'
import type { FooterProps, IFooter } from '~/components/Widgets/Footer/interfaces/IFooter'
import type { IFooterContacts } from '~/components/Widgets/Footer/interfaces/IFooterContacts'
import type { ISocialNetworks } from '~/components/Widgets/Footer/interfaces/ISocialNetworks'
import type { IPresentationLinks } from '~/components/Widgets/Footer/interfaces/IPresentationLinks'
import type { IFooterNavbarColumn } from '~/components/Widgets/Footer/interfaces/IFooterNavbarColumn'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'
import { SubscribeFormBlock } from '~/components/Widgets/Form/classes/forms/SubscribeFormBlock'

export class Footer implements IFooter {
  contacts: IFooterContacts
  socials: ISocialNetworks
  presentations: IPresentationLinks
  icons: Ref<{
    url: string
    alt: string
  }[]>

  columns: IFooterNavbarColumn[]
  subscribeFormBlock: ISubscribeFormBlock

  currentRootRoute = ref('')
  activeColumnIndex = ref(0)
  originColumnIndex = ref(0)
  activeSectionIndex = ref(0)
  originSectionIndex = ref(0)
  activeLink = ref('')
  isHovered = ref(false)
  mobileBreakpoint = 991
  topLineSeparatorRef = ref<HTMLElement | null>(null)
  animationIconsRef = ref<HTMLElement[] | null>(null)

  constructor({
    contacts, socials, presentations, icons, columns,
  }: FooterProps) {
    this.contacts = contacts || {}
    this.socials = socials || []
    this.presentations = presentations || []
    this.icons = ref(icons) || []
    this.columns = columns || []
    this.subscribeFormBlock = new SubscribeFormBlock({
      colorTheme: 'black',
      options: {
        formLocation: 'Footer',
        mediumTitle: true,
        showButton: false,
        submitButtonSizeInPercentage: 20,
        formMaxWidth: '90%',
      },
    })

    this.goToPage = this.goToPage.bind(this)
    this.onChangeColumnAndSection = this.onChangeColumnAndSection.bind(this)
    this.setCurrentRoute = this.setCurrentRoute.bind(this)
  }

  async goToPage(path: string, router: Router) {
    if (!path) { return }
    await router.push(path)
  }

  onChangeColumnAndSection(_: any, columnIndex: number | undefined, sectionIndex: number | undefined) {
    if (columnIndex === null || columnIndex === undefined) {
      this.isHovered.value = false
      this.activeColumnIndex.value = this.originColumnIndex.value
      this.activeSectionIndex.value = this.originSectionIndex.value
    } else {
      this.isHovered.value = true
      this.activeColumnIndex.value = columnIndex
      this.activeSectionIndex.value = sectionIndex!
    }

    this.setActiveColumn(this.activeColumnIndex.value)
  }

  setActiveColumn(index: number) {
    if (!this.icons.value.length) { return }

    delay(100).then(() => {
      const activeColumn = document.querySelector(`.footer-nav-column--${ index }`)
      if (!activeColumn) { return }
      const columnPositions = activeColumn.getBoundingClientRect()

      if (this.topLineSeparatorRef.value) { this.topLineSeparatorRef.value.style.left = `${ columnPositions.left }px` }
      if (this.animationIconsRef.value && this.animationIconsRef.value[index]) {
        this.animationIconsRef.value[index].style.left = `${ columnPositions.left }px`
      }
    })
  }

  getActiveElements(route: any) {
    if (route === '/') { return { columnIndex: 0, sectionIndex: 0, linkUrl: '' } }
    for (let i = 0; i < this.columns.length; i += 1) {
      const column = this.columns[i]
      for (let j = 0; j < column.sections.length; j += 1) {
        const section = column.sections[j]
        const sectionTitle = section.title.toLowerCase().split(' ').join('-')
        if (route.includes(sectionTitle)) {
          return {
            columnIndex: i,
            sectionIndex: j,
            linkUrl: '',
          }
        }
        for (let k = 0; k < section.menus.length; k += 1) {
          const menu = section.menus[k]
          for (let l = 0; l < menu.links.length; l += 1) {
            const link = menu.links[l]
            if (route.includes(link.url)) {
              return {
                columnIndex: i,
                sectionIndex: j,
                linkUrl: link.url,
              }
            }
          }
        }
      }
    }
    return { columnIndex: 0, sectionIndex: 0, linkUrl: '' }
  }

  setCurrentRoute(currentRoute: any) {
    const activeElements = this.getActiveElements(currentRoute)
    this.activeColumnIndex.value = activeElements.columnIndex
    this.originColumnIndex.value = this.activeColumnIndex.value
    this.activeSectionIndex.value = activeElements.sectionIndex
    this.originSectionIndex.value = activeElements.sectionIndex
    this.activeLink.value = activeElements.linkUrl
    this.setActiveColumn(this.activeColumnIndex.value)
  }
}

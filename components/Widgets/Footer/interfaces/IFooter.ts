import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { IFooterContacts } from '~/components/Widgets/Footer/interfaces/IFooterContacts'
import type { ISocialNetworks } from '~/components/Widgets/Footer/interfaces/ISocialNetworks'
import type { IPresentationLinks } from '~/components/Widgets/Footer/interfaces/IPresentationLinks'
import type { IFooterNavbarColumn } from '~/components/Widgets/Footer/interfaces/IFooterNavbarColumn'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'

export interface FooterProps {
  contacts: IFooterContacts
  socials: ISocialNetworks
  presentations: IPresentationLinks
  icons: {
    url: string
    alt: string
  }[]

  columns: IFooterNavbarColumn[]
}

export interface IFooter {
  currentRootRoute: Ref<string>
  activeColumnIndex: Ref<number>
  originColumnIndex: Ref<number>
  activeSectionIndex: Ref<number>
  originSectionIndex: Ref<number>
  activeLink: Ref<string>
  isHovered: Ref<boolean>
  mobileBreakpoint: number
  topLineSeparatorRef: Ref<HTMLElement | null>
  animationIconsRef: Ref<HTMLElement[] | null>
  contacts: IFooterContacts
  socials: ISocialNetworks
  presentations: IPresentationLinks
  icons: Ref<{
    url: string
    alt: string
  }[]>
  columns: IFooterNavbarColumn[]
  subscribeFormBlock: ISubscribeFormBlock
  goToPage(path: string, router: Router): void
  onChangeColumnAndSection(_: any, columnIndex: number | undefined, sectionIndex: number | undefined): void
  setActiveColumn(index: number): void
  getActiveElements(route: any): {
    columnIndex: number
    sectionIndex: number
    linkUrl: string | any
  }
  setCurrentRoute(currentRoute: string): void
}

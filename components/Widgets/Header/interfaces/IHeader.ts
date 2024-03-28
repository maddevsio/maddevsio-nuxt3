import type { ComputedRef, Ref } from 'vue'
import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'

export interface IHeader {
  mobileSize: number
  headerTransparent: Ref<boolean>
  showLogoText: Ref<boolean>
  isActiveMobileMenu: Ref<boolean>
  isMobile: Ref<boolean>
  headerHeight: Ref<number>
  headerIsTransparent: ComputedRef<boolean>
  logoTextIsActive: ComputedRef<boolean>
  modalContactMeRef: Ref<{ show(): void } | null>
  headerRef: Ref<HTMLElement | null>
  menu: IHeaderMenu<IHeaderMenuItem[]>
  getHeaderHeight(headerRef: Element): void
  handleLogo(scrollTop: number): void
  setStylesForHeader(): void
  resetState(path: string): void
  showModal(): void
  handleMobileMenuScroll(e: Event): void
  toggleMobileMenu(): void
  resetMobileMenu(): void
  observeIsMobile(): void
}

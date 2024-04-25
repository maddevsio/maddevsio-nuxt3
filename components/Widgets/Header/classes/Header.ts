import type { ComputedRef, Ref } from 'vue'
import type { IHeader } from '~/components/Widgets/Header/interfaces/IHeader'
import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'
import { contactMeClickEvent } from '~/analytics/events'

export class Header implements IHeader {
  headerHeight: Ref<number>
  headerIsTransparent: ComputedRef<boolean>
  logoTextIsActive: ComputedRef<boolean>
  modalContactMeRef: Ref<{ show(): void } | null>
  headerRef: Ref<HTMLElement | null>
  menu: IHeaderMenu<IHeaderMenuItem[]>

  mobileSize = 1200
  headerTransparent = ref(true)
  showLogoText = ref(true)
  isActiveMobileMenu = ref(false)
  isMobile = ref(false)

  constructor(menu: IHeaderMenu<IHeaderMenuItem[]>) {
    this.menu = menu
    this.headerHeight = ref(63)
    this.headerRef = ref(null)
    this.headerIsTransparent = computed(() => (!this.menu.activeSubNavigation.value && this.headerTransparent.value))
    this.logoTextIsActive = computed(() => (this.showLogoText.value &&
      !this.menu.activeSubNavigation.value && this.headerTransparent.value))
    this.modalContactMeRef = ref(null)

    this.getHeaderHeight = this.getHeaderHeight.bind(this)
    this.setStylesForHeader = this.setStylesForHeader.bind(this)
    this.resetState = this.resetState.bind(this)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.handleLogo = this.handleLogo.bind(this)
    this.handleMobileMenuScroll = this.handleMobileMenuScroll.bind(this)
    this.observeIsMobile = this.observeIsMobile.bind(this)
    this.showModal = this.showModal.bind(this)
  }

  getHeaderHeight(headerRef: Element) {
    const headerStore = useHeaderStore()
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(entries => entries.forEach(entry => {
        if (!entry.contentBoxSize) { return }
        const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize
        this.headerHeight.value = contentBoxSize.blockSize
        headerStore.updateHeaderHeight(contentBoxSize.blockSize)
      }))
      resizeObserver.observe(headerRef)
    }
  }

  handleLogo(scrollTop: number) {
    this.showLogoText.value = this.headerTransparent.value && !this.isActiveMobileMenu.value
      ? true
      : Boolean(scrollTop < 10)
  }

  setStylesForHeader() {
    if (document.body.style.getPropertyValue('position') === 'fixed') { return }
    const scrollTop = window.scrollY
    const area = document.querySelector('#transparent-header-area') as HTMLElement
    const areaWithNoTextLogo = document.querySelector('#no-text-logo')
    const headerHeight = this.headerHeight.value
    const earlyStartBGChange = 30 // For an earlier start change background header

    this.handleLogo(scrollTop)

    if (areaWithNoTextLogo) {
      this.headerTransparent.value = false
    } else if (!area) {
      this.headerTransparent.value = scrollTop <= earlyStartBGChange
    } else if (area) {
      const areaHeight = (area.offsetTop + area.offsetHeight) - headerHeight
      // Before Bottom point of the section
      this.headerTransparent.value = scrollTop <= areaHeight - earlyStartBGChange
    } else {
      this.headerTransparent.value = false
    }
  }

  resetState(path: string) {
    if (path !== window.location.pathname) {
      this.headerTransparent.value = true
      this.menu.activeSubNavigation.value = ''
      if (this.isActiveMobileMenu.value) { this.toggleMobileMenu() }
    }
  }

  showModal() {
    if (!this.modalContactMeRef?.value?.show) { return }
    this.modalContactMeRef.value.show()
    contactMeClickEvent.send('Header')
  }

  handleMobileMenuScroll(e: Event) {
    e.stopImmediatePropagation()
    const target = e.target as HTMLElement
    this.handleLogo(target.scrollTop)
  }

  toggleMobileMenu() {
    this.isActiveMobileMenu.value = !this.isActiveMobileMenu.value
    if (!this.isActiveMobileMenu.value) {
      this.resetMobileMenu()
      return
    }
    manageScrollOnBody.disableScrollOnBody()
    nextTick(() => {
      document.addEventListener('scroll', this.handleMobileMenuScroll, true)
      // eslint-disable-next-line
    }).catch(console.error)
  }

  resetMobileMenu() {
    this.isActiveMobileMenu.value = false
    this.menu.activeMobileSubNavigation.value = ''
    this.menu.activeChapter.value = ''
    if (document.body.style.getPropertyValue('overflow') === 'hidden') {
      manageScrollOnBody.enableScrollOnBody()
    }
    document.removeEventListener('scroll', this.handleMobileMenuScroll, true)
  }

  observeIsMobile() {
    this.isMobile.value = window.innerWidth <= this.mobileSize
    if (!this.isMobile.value) {
      this.resetMobileMenu()
    }
  }
}

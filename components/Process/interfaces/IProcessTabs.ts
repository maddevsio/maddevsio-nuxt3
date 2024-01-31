import type { ImageField } from '@prismicio/types'
import type { Ref } from 'vue'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export interface ITabItem {
  tabIcon: ImageField
  tabName: string
  tabDescription: string
}

export interface ProcessTabsProps {
  items: ITabItem[]
  primary: {
    backgroundColor: string
  }
}

export interface IProcessTabs {
  triggerBreakpoint: number
  timer: number
  indentFromHeader: number
  mobileBreakpoint: number
  sliceBackgroundColor: string
  tabs: ITabItem[]
  activeTab: Ref<number | null>
  currentActiveTab: Ref<number | null>
  setLoopActiveClass: Ref<boolean>
  intervalId: Ref<ReturnType<typeof setInterval> | undefined>
  observerSection: Ref<IntersectionObserverInstance | null>
  processSlice: Ref<HTMLElement | null>
  processTabs: Ref<any>
  tabButtons: Ref<HTMLElement[] | null>
  enabledAutoplay: Ref<boolean>
  manualInteraction: Ref<boolean>
  removeActiveLoopClass(): void
  changeActiveTab({
    $event,
    tabIndex,
    event,
    isMobile,
  }: {
    $event?: MouseEvent | TouchEvent | null
    tabIndex?: number
    event?: string
    isMobile?: { value: boolean }
  }): Promise<void>
  startAutoplayToChangeTab(): boolean
  initIntersectionObserverForSections(): void
  checkWidthToInit(): void
}

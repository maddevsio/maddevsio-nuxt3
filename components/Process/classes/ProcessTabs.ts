import type { Ref } from 'vue'
import type { IProcessTabs, ITabItem, ProcessTabsProps } from '~/components/Process/interfaces/IProcessTabs'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class ProcessTabs implements IProcessTabs {
  triggerBreakpoint = 1041
  timer = 15000
  indentFromHeader = 170
  mobileBreakpoint = 600

  sliceBackgroundColor: string
  tabs: ITabItem[]
  activeTab: Ref<number | null>
  currentActiveTab: Ref<number>
  setLoopActiveClass: Ref<boolean>
  intervalId: Ref<ReturnType<typeof setInterval> | undefined>
  observerSection: Ref<IntersectionObserverInstance | null>
  processSlice: Ref<HTMLElement | null>
  processTabs: Ref<any>
  tabButtons: Ref<HTMLElement[] | null>
  enabledAutoplay: Ref<boolean>
  manualInteraction: Ref<boolean>
  constructor(props: ProcessTabsProps) {
    this.sliceBackgroundColor = props.primary.backgroundColor || 'white'
    this.tabs = props.items
    this.activeTab = ref(0)
    this.currentActiveTab = ref(0)
    this.setLoopActiveClass = ref(false)
    this.intervalId = ref(undefined)
    this.observerSection = ref(null)
    this.processSlice = ref(null)
    this.processTabs = ref(null)
    this.tabButtons = ref(null)
    this.enabledAutoplay = ref(true)
    this.manualInteraction = ref(false)

    this.changeActiveTab = this.changeActiveTab.bind(this)
    this.startAutoplayToChangeTab = this.startAutoplayToChangeTab.bind(this)
    this.initIntersectionObserverForSections = this.initIntersectionObserverForSections.bind(this)
    this.checkWidthToInit = this.checkWidthToInit.bind(this)
    this.removeActiveLoopClass = this.removeActiveLoopClass.bind(this)

    markRaw(this)
  }

  removeActiveLoopClass() {
    if (!this.tabButtons.value) {
      this.tabButtons.value = this.processTabs.value.$el.querySelectorAll('.process-tabs__tab')
      this.tabButtons.value!.forEach(tab => {
        tab.classList.remove('process-tabs__tab--active-loop')
      })
      this.tabButtons.value = null
      this.setLoopActiveClass.value = false
    }
  }

  async changeActiveTab({
    $event = null,
    // @ts-ignore
    tabIndex,
    event = '',
    isMobile = { value: false },
  }) {
    this.activeTab.value = tabIndex
    this.currentActiveTab.value = tabIndex

    if (event === 'click') {
      this.manualInteraction.value = true
      clearInterval(this.intervalId.value)
      this.removeActiveLoopClass()

      if (isMobile.value && $event) {
        await useScrollToTab($event, this.indentFromHeader)
      }
    }
  }

  startAutoplayToChangeTab() {
    if (this.manualInteraction.value) { return false }
    this.setLoopActiveClass.value = this.enabledAutoplay.value
    if (this.intervalId.value !== undefined) { return false }

    this.intervalId.value = setInterval(() => {
      this.setLoopActiveClass.value = this.enabledAutoplay.value
      if (this.enabledAutoplay.value) {
        if (this.currentActiveTab.value < (this.tabs.length - 1)) {
          this.currentActiveTab.value += 1
        } else {
          this.currentActiveTab.value = 0
        }
        // eslint-disable-next-line no-console
        this.changeActiveTab({ tabIndex: this.currentActiveTab.value }).catch(console.log)
      }
    }, this.timer)
    return false
  }

  initIntersectionObserverForSections() {
    this.observerSection.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.manualInteraction.value = false
          this.startAutoplayToChangeTab()
        } else if (this.processTabs.value) {
          clearInterval(this.intervalId.value)
          this.intervalId.value = undefined
          this.removeActiveLoopClass()
        }
      })
    }, {
      rootMargin: '0px 0px -5%',
    })
    if (this.processSlice.value) {
      this.observerSection.value.observe(this.processSlice.value)
    }
  }

  checkWidthToInit() {
    if (process.client && window.innerWidth < this.mobileBreakpoint) {
      this.enabledAutoplay.value = false
      clearInterval(this.intervalId.value)
      this.intervalId.value = undefined
    } else {
      if (!this.enabledAutoplay.value) { this.startAutoplayToChangeTab() }
      this.enabledAutoplay.value = true
    }
    if (!this.manualInteraction.value) { this.setLoopActiveClass.value = this.enabledAutoplay.value }
  }
}

import type { Ref } from 'vue'
import { useScrollToTab } from '~/composables/useScrollToTab'
import type { ITabsSlice, TabItem, TabsSlicePropTypes } from '~/components/PageBlocks/TabSliceComponents/interfaces/ITabsSlice'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class Tabs implements ITabsSlice {
  triggerBreakpoint = 1041

  indentFromHeader = 230

  tabs: Ref<TabItem[]>
  activeTab: Ref<string | undefined>
  intervalId: Ref<ReturnType<typeof setInterval> | undefined>
  currentActiveTab: Ref<number>
  tabItemsRef: Ref<any>
  tabButtons: Ref<NodeListOf<Element> | null>
  setLoopActiveClass: Ref<boolean>
  observerSection: Ref<IntersectionObserverInstance | null>
  tabSliceRef: Ref<HTMLElement | null>

  constructor(props: TabsSlicePropTypes) {
    this.tabs = ref(props.items?.slice(0, 4) || [])
    this.activeTab = ref(props.items[0].tabName)
    this.intervalId = ref(undefined)
    this.currentActiveTab = ref(0)
    this.tabItemsRef = ref(null)
    this.tabButtons = ref(null)
    this.setLoopActiveClass = ref(false)
    this.observerSection = ref(null)
    this.tabSliceRef = ref(null)

    this.setActiveClassNames = this.setActiveClassNames.bind(this)
    this.changeActiveTab = this.changeActiveTab.bind(this)
    this.initIntersectionObserverForSections = this.initIntersectionObserverForSections.bind(this)
    this.removeActiveLoopClass = this.removeActiveLoopClass.bind(this)

    markRaw(this)
  }

  setActiveClassNames(tabName: string, tabTextAndCheckmarkColor: string) {
    return [
      this.activeTab.value === tabName && 'tabs-slice__list-tab-name-text--active',
      this.activeTab.value === tabName && `tabs-slice__list-tab-name-text--active-${ tabTextAndCheckmarkColor }`,
    ].filter(Boolean)
  }

  async changeActiveTab({ $event = null, tabName = '', event = '' }) {
    this.activeTab.value = tabName
    if (event === 'click') {
      clearInterval(this.intervalId.value)
      this.removeActiveLoopClass()
      if ($event) {
        await useScrollToTab($event, this.indentFromHeader)
      }
    }
  }

  removeActiveLoopClass() {
    if (!this.tabButtons.value && this.tabItemsRef.value && this.tabItemsRef.value.$el.querySelectorAll) {
      this.tabButtons.value = this.tabItemsRef.value.$el.querySelectorAll('.tabs-slice__list-item')
      if (this.tabButtons.value) {
        this.tabButtons.value.forEach((tab: Element) => {
          tab.classList.remove('tabs-slice__list-item--active-loop')
        })
      }
      this.tabButtons.value = null
      this.setLoopActiveClass.value = false
    }
  }

  initIntersectionObserverForSections = () => {
    this.observerSection.value = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setLoopActiveClass.value = true
            this.intervalId.value = setInterval(() => {
              if (this.currentActiveTab.value < this.tabs.value.length - 1) {
                this.currentActiveTab.value += 1
              } else {
                this.currentActiveTab.value = 0
              }
              this.changeActiveTab({
                tabName: this.tabs.value[this.currentActiveTab.value].tabName,
                // eslint-disable-next-line no-console
              }).catch(console.log)
            }, 15000)
          } else if (this.tabItemsRef.value) {
            clearInterval(this.intervalId.value)
            this.removeActiveLoopClass()
          }
        })
      },
      {
        rootMargin: '0px 0px -5%',
      },
    )

    if (this.tabSliceRef.value) {
      this.observerSection.value.observe(this.tabSliceRef.value)
    }
  }
}

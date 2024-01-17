import { markRaw, ref } from 'vue'
import { useScrollToTab } from '~/composables/useScrollToTab'
import type { ITabsSlice, TabItem, TabsSlicePropTypes } from '~/interfaces/componentInterfaces/TabsSlice/ITabsSlice'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class Tabs implements ITabsSlice {
  triggerBreakpoint = 1041

  indentFromHeader = 230

  tabs = ref<TabItem[]>([])
  activeTab = ref<string>('')
  intervalId = ref<NodeJS.Timeout | undefined>(undefined)
  currentActiveTab = ref(0)
  tabItemsRef = ref<Element | null>(null)
  tabButtons = ref<string[] | null | NodeListOf<Element>>(null)
  setLoopActiveClass = ref(false)
  observerSection = ref<IntersectionObserverInstance | null>(null)
  tabSliceRef = ref(null)

  constructor(props: TabsSlicePropTypes) {
    this.tabs.value = props.items.slice(0, 4) || []
    this.activeTab.value = props.items[0].tabName

    this.setActiveClassNames = this.setActiveClassNames.bind(this)
    this.changeActiveTab = this.changeActiveTab.bind(this)
    this.initIntersectionObserverForSections = this.initIntersectionObserverForSections.bind(this)

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
    if (!this.tabButtons.value && this.tabItemsRef.value && this.tabItemsRef.value.querySelectorAll) {
      this.tabButtons.value = this.tabItemsRef.value.querySelectorAll('.tabs-slice__list-item')
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

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RichTextField } from '@prismicio/client'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

interface TabItem {
  tabName: string
  tabDescription: RichTextField
  showButton: boolean
  buttonText: string
  tabTextAndCheckmarkColor: string
}

interface TabsSlicePropTypes {
  items: TabItem[]
  primary: {
    linksColor: string
  }
}

const props = defineProps({
  slice: {
    type: Object as PropType<TabsSlicePropTypes>,
    default: () => ({}),
  },
})
const triggerBreakpoint = 1041
const indentFromHeader = 230

const tabs = ref<TabItem[]>(props.slice.items?.slice(0, 4) || [])
const activeTab = ref<string | undefined>(props.slice.items[0].tabName)
const intervalId = ref<ReturnType<typeof setInterval> | undefined>()
const currentActiveTab = ref(0)
const tabItemsRef = ref<any>(null)
const tabButtons = ref<NodeListOf<Element> | null>(null)
const setLoopActiveClass = ref(false)
const observerSection = ref<IntersectionObserverInstance | null>(null)
const tabSliceRef = ref<HTMLElement | null>(null)
const linksColor = props.slice.primary.linksColor || 'blue'

const { isMobile } = useCheckMobile(triggerBreakpoint)

const setActiveClassNames = (tabName: string, tabTextAndCheckmarkColor: string) => {
  return [
    activeTab.value === tabName && 'tabs-slice__list-tab-name-text--active',
    activeTab.value === tabName && `tabs-slice__list-tab-name-text--active-${ tabTextAndCheckmarkColor }`,
  ].filter(Boolean)
}

const changeActiveTab = async ({ $event = null, tabName = '', event = '' }) => {
  activeTab.value = tabName
  if (event === 'click') {
    clearInterval(intervalId.value)
    removeActiveLoopClass()
    if ($event) {
      await useScrollToTab($event, indentFromHeader)
    }
  }
}

const removeActiveLoopClass = () => {
  if (!tabButtons.value && tabItemsRef.value && tabItemsRef.value.$el.querySelectorAll) {
    tabButtons.value = tabItemsRef.value.$el.querySelectorAll('.tabs-slice__list-item')
    if (tabButtons.value) {
      tabButtons.value.forEach((tab: Element) => {
        tab.classList.remove('tabs-slice__list-item--active-loop')
      })
    }
    tabButtons.value = null
    setLoopActiveClass.value = false
  }
}

const initIntersectionObserverForSections = () => {
  observerSection.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLoopActiveClass.value = true
          intervalId.value = setInterval(() => {
            if (currentActiveTab.value < tabs.value.length - 1) {
              currentActiveTab.value += 1
            } else {
              currentActiveTab.value = 0
            }
            changeActiveTab({
              tabName: tabs.value[currentActiveTab.value].tabName,
              // eslint-disable-next-line no-console
            }).catch(console.log)
          }, 15000)
        } else if (tabItemsRef.value) {
          clearInterval(intervalId.value)
          removeActiveLoopClass()
        }
      })
    },
    {
      rootMargin: '0px 0px -5%',
      threshold: 0.8,
    },
  )

  if (tabSliceRef.value) {
    observerSection.value.observe(tabSliceRef.value)
  }
}

onMounted(() => {
  initIntersectionObserverForSections()
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})
</script>
<template>
  <section ref="tabSliceRef" class="tabs-slice">
    <LazyPageBlocksTabSliceComponentsWithRichTextComponentsDesktop
      v-if="!isMobile"
      ref="tabItemsRef"
      :set-active-class-names="setActiveClassNames"
      :active-tab="activeTab"
      :change-active-tab="changeActiveTab"
      :set-loop-active-class="setLoopActiveClass"
      :tabs="tabs"
      :links-color="linksColor"
    />
    <LazyPageBlocksTabSliceComponentsWithRichTextComponentsMobile
      v-if="isMobile"
      ref="tabItemsRef"
      :set-active-class-names="setActiveClassNames"
      :active-tab="activeTab"
      :change-active-tab="changeActiveTab"
      :set-loop-active-class="setLoopActiveClass"
      :tabs="tabs"
      :links-color="linksColor"
    />
  </section>
</template>
<style scoped lang="scss">
.tabs-slice {
  background-color: $bgcolor--black;
}
</style>

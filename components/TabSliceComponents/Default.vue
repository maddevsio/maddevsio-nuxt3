<script setup lang="ts">
import type { PropType } from 'vue'
import { Tabs } from '~/components/TabSliceComponents/classes/TabsSlice'
import type { TabsSlicePropTypes } from '~/components/TabSliceComponents/interfaces/ITabsSlice'

const props = defineProps({
  slice: {
    type: Object as PropType<TabsSlicePropTypes>,
    default: () => ({}),
  },
})
const tabInstance = new Tabs(props.slice)
const { isMobile } = useCheckMobile(tabInstance.triggerBreakpoint)

onMounted(() => {
  tabInstance.initIntersectionObserverForSections()
})

onUnmounted(() => {
  clearInterval(tabInstance.intervalId.value)
})

const {
  tabs,
  activeTab,
  setActiveClassNames,
  changeActiveTab,
  tabItemsRef,
  setLoopActiveClass,
  tabSliceRef,
} = tabInstance
</script>
<template>
  <section ref="tabSliceRef" class="tabs-slice">
    <TabSliceComponentsTabsSliceDesktop
      v-if="!isMobile"
      ref="tabItemsRef"
      :set-active-class-names="setActiveClassNames"
      :active-tab="activeTab"
      :change-active-tab="changeActiveTab"
      :set-loop-active-class="setLoopActiveClass"
      :tabs="tabs"
    />
    <LazyTabSliceComponentsTabsSliceMobile
      v-if="isMobile"
      ref="tabItemsRef"
      :set-active-class-names="setActiveClassNames"
      :active-tab="activeTab"
      :change-active-tab="changeActiveTab"
      :set-loop-active-class="setLoopActiveClass"
      :tabs="tabs"
    />
  </section>
</template>
<style scoped lang="scss">
.tabs-slice {
  background-color: $bgcolor--black;
}
</style>

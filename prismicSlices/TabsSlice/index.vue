<script setup lang="ts">
import { Tabs } from '~/componentClasses/Tabs/TabsSlice.js'

const props = defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
const tabInstance = new Tabs(props.slice)
const { tabs, activeTab, setActiveClassNames, changeActiveTab, tabItemsRef, setLoopActiveClass, tabSliceRef } =
  tabInstance
const { isMobile, checkIsMobile } = useCheckMobile(tabInstance.triggerBreakpoint)

onMounted(() => {
  tabInstance.initIntersectionObserverForSections()
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  clearInterval(tabInstance.intervalId.value)
  window.removeEventListener('resize', checkIsMobile)
})
</script>
<template>
  <section ref="tabSliceRef" class="tabs-slice">
    <LazyTabSliceComponentsTabsSliceDesktop
      v-if="!isMobile"
      ref="tabItemsRef"
      :set-active-class-names="setActiveClassNames"
      :active-tab="activeTab"
      :change-active-tab="changeActiveTab"
      :set-loop-active-class="setLoopActiveClass"
      :tabs="tabs"
    />
    <LazyTabSliceComponentsTabsSliceMobile
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

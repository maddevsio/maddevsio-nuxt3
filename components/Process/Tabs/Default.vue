<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProcessTabsProps } from '~/components/Process/interfaces/IProcessTabs'
import { ProcessTabs } from '~/components/Process/classes/ProcessTabs'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ProcessTabsProps>,
    default: () => ({}),
  },
})
const processTabsInstance = new ProcessTabs(slice)
const { isMobile } = useCheckMobile(processTabsInstance.triggerBreakpoint)

onMounted(() => {
  processTabsInstance.checkWidthToInit()
  processTabsInstance.initIntersectionObserverForSections()
  window.addEventListener('resize', processTabsInstance.checkWidthToInit)
})

onUnmounted(() => {
  clearInterval(processTabsInstance.intervalId.value)
  window.removeEventListener('resize', processTabsInstance.checkWidthToInit)
})

const {
  sliceBackgroundColor,
  tabs,
  activeTab,
  changeActiveTab,
  setLoopActiveClass,
  processTabs,
  processSlice,
} = processTabsInstance
</script>
<template>
  <section
    ref="processSlice"
    class="process-slice"
    :class="colorConverterToClass('slice-bg', sliceBackgroundColor)"
  >
    <div class="container">
      <ProcessTabsDesktop
        v-if="!isMobile"
        ref="processTabs"
        :tabs="tabs"
        :active-tab="activeTab"
        :set-loop-active-class="setLoopActiveClass"
        :slice-background-color="sliceBackgroundColor"
        @change-active-tab="changeActiveTab"
      />
      <!--      <LazyProcessTabsMobile-->
      <!--        v-if="isMobile"-->
      <!--        ref="processTabs"-->
      <!--        :tabs="tabs"-->
      <!--        :active-tab="activeTab"-->
      <!--        :change-active-tab="changeActiveTab"-->
      <!--        :set-loop-active-class="setLoopActiveClass"-->
      <!--        :slice-background-color="sliceBackgroundColor"-->
      <!--      />-->
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import 'assets/styles/colorClasses/colors';
.process-slice {
  padding: 1px 0;
}
</style>

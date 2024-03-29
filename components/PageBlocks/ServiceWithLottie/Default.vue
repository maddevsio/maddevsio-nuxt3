<script setup lang="ts">
import type { PropType } from 'vue'

interface GetLinkProps {
  softwareDevelopmentLink: string
  hrPracticesLink: string
  transparentStaffingLink: string
  technicalAuditLink: string
  technicalInfrastructureLink: string
  techMarketingLink: string
  projectDiscoveryLink: string
  customSoftwareLink: string
}

interface ButtonsGroup {
  firstGroupButtonText: string
  secondGroupButtonText: string
  thirdGroupButtonText: string
}

interface ServiceSliceWithLottieProps {
  primary: GetLinkProps & ButtonsGroup
}

const props = defineProps({
  slice: {
    type: Object as PropType<ServiceSliceWithLottieProps>,
    default: () => ({}),
  },
})

const triggerBreakpoint = 875
const icons = [
  'first-group-service-slice-icon.svg',
  'second-group-service-slice-icon.svg',
  'third-group-service-slice-icon.svg',
]

const buttons = [
  {
    label: props.slice.primary.firstGroupButtonText || 'Tech and Development',
    lottieFrame: 200,
  },
  {
    label: props.slice.primary.secondGroupButtonText || 'Management and Consulting',
    lottieFrame: 250,
  },
  {
    label: props.slice.primary.thirdGroupButtonText || 'HR and Marketing',
    lottieFrame: 330,
  },
]

const collectedSliceData = {
  ...props.slice.primary || {},
  buttons,
  icons,
}

const { isMobile } = useCheckMobile(triggerBreakpoint)
</script>
<template>
  <section
    class="service-slice"
  >
    <LazyPageBlocksServiceWithLottieDesktop
      v-if="!isMobile"
      :collected-data="collectedSliceData"
    />
    <LazyPageBlocksServiceWithLottieMobile
      v-if="isMobile"
      :collected-data="collectedSliceData"
    />
  </section>
</template>
<style scoped lang="scss">
.service-slice {
  background-color: $bgcolor--black;
  position: relative;
  overflow: hidden;
}
</style>

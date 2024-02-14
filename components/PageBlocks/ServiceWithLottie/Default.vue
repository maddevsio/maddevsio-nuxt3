<script setup lang="ts">
import type { PropType } from 'vue'
import { ServiceSliceWithLottie } from '~/components/PageBlocks/ServiceWithLottie/classes/ServiceSliceWithLottie'
import type {
  ServiceSliceWithLottieProps,
} from '~/components/PageBlocks/ServiceWithLottie/interfaces/IServiceSliceWithLottie'

const props = defineProps({
  slice: {
    type: Object as PropType<ServiceSliceWithLottieProps>,
    default: () => ({}),
  },
})
const router = useRouter()
const { desktopInstance, mobileInstance, triggerBreakpoint } = new ServiceSliceWithLottie({ ...props.slice, router })
const { isMobile } = useCheckMobile(triggerBreakpoint)
</script>
<template>
  <section
    class="service-slice"
  >
    <LazyPageBlocksServiceWithLottieDesktop
      v-if="!isMobile"
      :desktop-instance="desktopInstance"
    />
    <LazyPageBlocksServiceWithLottieMobile
      v-if="isMobile"
      :mobile-instance="mobileInstance"
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

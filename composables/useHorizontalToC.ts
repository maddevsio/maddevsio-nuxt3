import type { HorizontalToC } from '~/components/TableOfContent/classes/HorizontalToC'

export const useHorizontalToC = (instance: HorizontalToC) => {
  const { isMobile } = useCheckMobile(instance.triggerBreakpoint)

  onMounted(() => {
    if (!isMobile.value) {
      window.addEventListener('scroll', instance.getDistanceFromHeader)
    }
  })

  onUnmounted(() => {
    if (!isMobile.value && instance.horizontalTocRef.value) {
      window.removeEventListener('scroll', instance.getDistanceFromHeader)
    }
  })

  return {
    isMobile,
  }
}

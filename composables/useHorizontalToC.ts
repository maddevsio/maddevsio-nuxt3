import type { HorizontalToC } from '~/componentClasses/HorizontalToC/HorizontalToC'

export const useHorizontalToC = (instance: HorizontalToC) => {
  const { isMobile, checkIsMobile } = useCheckMobile(instance.triggerBreakpoint)
  const { updateActiveAnchor } = useHorizontalToCStore()
  const setActiveAnchor = (sectionId: string) => instance.setActiveAnchor(sectionId, updateActiveAnchor)

  onMounted(() => {
    checkIsMobile()
    if (!isMobile.value) {
      window.addEventListener('scroll', instance.getDistanceFromHeader)
    }
    window.addEventListener('resize', checkIsMobile)
  })

  onUnmounted(() => {
    if (!isMobile.value && instance.horizontalTocRef.value) {
      window.removeEventListener('scroll', instance.getDistanceFromHeader)
    }
    window.removeEventListener('resize', checkIsMobile)
  })

  return {
    setActiveAnchor,
    isMobile,
  }
}

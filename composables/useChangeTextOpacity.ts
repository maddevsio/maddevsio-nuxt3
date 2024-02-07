export const useChangeTextOpacity = refName => {
  const sectionTextOpacity = ref(1)

  const onScroll = () => {
    const elementRef = refName.value
    if (!elementRef) { return }
    const { clientHeight } = refName.value
    const scrollPosition = window.scrollY
    const result = ((clientHeight - scrollPosition) / clientHeight) + 0.2
    if (result > 0 && result <= 1) { sectionTextOpacity.value = ((clientHeight - scrollPosition) / clientHeight) + 0.2 }
    if (scrollPosition === 0) { sectionTextOpacity.value = 1 }
  }

  onMounted(() => {
    document.addEventListener('scroll', onScroll)
  })

  onUnmounted(() => {
    document.removeEventListener('scroll', onScroll)
  })

  return {
    sectionTextOpacity,
  }
}

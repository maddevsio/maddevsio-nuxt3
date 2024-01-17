export const useCheckMobile = (width: number) => {
  const isMobile = ref(false)

  const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= width
  }

  return {
    isMobile,
    checkIsMobile,
  }
}

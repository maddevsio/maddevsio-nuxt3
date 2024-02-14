export const useModalData = () => {
  const modalWindow = ref<{ show(): void } | null>(null)
  const styles = useCssModule()
  provide('styles', styles)
  const show = () => {
    if (!modalWindow.value!.show) { return }
    modalWindow.value!.show()
  }

  return {
    show,
    styles,
    modalWindow,
  }
}

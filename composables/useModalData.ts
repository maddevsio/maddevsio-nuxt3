export const useModalData = () => {
  const modalWindow = ref<{ show(): void, close(): void } | null>(null)
  const styles = useCssModule()
  provide('styles', styles)
  const show = () => {
    if (!modalWindow.value!.show) { return }
    modalWindow.value!.show()
  }

  const close = () => {
    if (!modalWindow.value!.close) { return }
    modalWindow.value!.close()
  }
  return {
    show,
    close,
    styles,
    modalWindow,
  }
}

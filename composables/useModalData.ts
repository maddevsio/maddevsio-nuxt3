import type Ebook from '~/components/Widgets/Modal/Ebook.vue'

export const useModalData = () => {
  const modalWindow = ref<InstanceType<typeof Ebook> | null>(null)
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
    isShowModal: modalWindow.value?.isShowModal,
    styles,
    modalWindow,
  }
}

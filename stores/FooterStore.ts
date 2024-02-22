export const useFooterStore = defineStore('FooterStore', () => {
  const footerVisible = ref(true)
  const updateFooterVisible = (isShow: boolean) => {
    footerVisible.value = isShow
  }

  return {
    footerVisible,
    updateFooterVisible,
  }
})

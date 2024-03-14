export const useClearStoresBeforeRouteLeave = () => {
  const { updateFooterVisible } = useFooterStore()
  const { updateHeaderPlateData } = useHeaderPlateStore()

  onBeforeRouteLeave(() => {
    updateHeaderPlateData(null)
    updateFooterVisible(true)
  })
}

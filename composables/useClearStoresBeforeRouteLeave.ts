export const useClearStoresBeforeRouteLeave = () => {
  const { updateFooterVisible } = useFooterStore()
  const { updateHeaderPlateData } = useHeaderPlateStore()
  const { updateEmailSubject } = useEmailSubjectStore()

  onBeforeRouteLeave(() => {
    updateHeaderPlateData(null)
    updateFooterVisible(true)
    updateEmailSubject('')
  })
}

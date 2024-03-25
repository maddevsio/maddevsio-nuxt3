export const useClearStoresBeforeRouteLeave = () => {
  const { updateFooterVisible } = useFooterStore()
  const { updateEmailSubject } = useEmailSubjectStore()

  onBeforeRouteLeave(() => {
    updateFooterVisible(true)
    updateEmailSubject('')
  })
}

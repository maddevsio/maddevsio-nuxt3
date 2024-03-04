export const useTagChanged = (pageType = 'page', globalStoreName: string) => {
  const router = useRouter()
  const route = useRoute()
  const { updateActiveTag } = useDynamicTagCloudStore()
  const { activeTag } = storeToRefs(useDynamicTagCloudStore())

  const tagChangedHandler = async (tag: string) => {
    const checkedTag = checkTagCloudName(tag)
    updateActiveTag(checkedTag, globalStoreName)
    await router.push({
      path: route.path,
      query: {
        tag,
        [pageType]: 1,
      },
    })
  }

  const routerPush = async (query: any) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        ...query,
      },
    })
  }

  const tagChangedFromQuery = async (tag: string) => {
    const checkedTag = checkTagCloudName(tag)
    updateActiveTag(checkedTag, globalStoreName)
    await routerPush({ tag })
  }

  return {
    tagChangedFromQuery,
    tagChangedHandler,
    activeTag,
  }
}

export const useTagChanged = (pageType = 'page', globalStoreName: string, allTag: string, contentType: string, withPageInRoute = true) => {
  const router = useRouter()
  const route = useRoute()
  const { updateActiveTag } = useDynamicTagCloudStore()
  const { activeTag } = storeToRefs(useDynamicTagCloudStore())

  const routerPush = async (query: any) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        ...query,
      },
    })
  }

  const tagChangedHandler = async (tag: string) => {
    const checkedTag = checkTagCloudName(tag, allTag, contentType)
    updateActiveTag(checkedTag, globalStoreName)
    const query = withPageInRoute ? { [pageType]: 1, tag } : { tag }
    await routerPush(query)
  }

  const tagChangedFromQuery = async (tag: string) => {
    const checkedTag = checkTagCloudName(tag, allTag, contentType)
    updateActiveTag(checkedTag, globalStoreName)
    await routerPush({ tag })
  }

  return {
    tagChangedFromQuery,
    tagChangedHandler,
    activeTag,
  }
}

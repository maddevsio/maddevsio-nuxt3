export const checkParametersForQuery = (pageName: string, mainTag: string, routeQuery: Record<string, string>, allTag: string) => {
  const firstPage = 1
  const { tag, [pageName]: page } = routeQuery
  const checkedTag = checkTagCloudName(tag, allTag, mainTag)
  const tags = tag ? [checkedTag] : [mainTag]
  const pageNum = page ? Number(page) : firstPage

  return { tags, page: pageNum }
}

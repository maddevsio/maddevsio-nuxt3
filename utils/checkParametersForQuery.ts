export const checkParametersForQuery = (pageName: string, mainTag: string, routeQuery: Record<string, string>) => {
  const firstPage = 1
  const { tag, [pageName]: page } = routeQuery
  const checkedTag = checkTagCloudName(tag)

  const tags = tag ? [checkedTag] : [mainTag]
  const pageNum = page ? Number(page) : firstPage

  return { tags, page: pageNum }
}

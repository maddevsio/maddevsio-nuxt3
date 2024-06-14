export const checkParametersForQuery = (pageName: string, mainTag: string, routeQuery: Record<string, string>) => {
  const firstPage = 1
  const checkedTag = checkTagCloudName(routeQuery.tag)
  if (pageName in routeQuery && !('tag' in routeQuery)) {
    return { tags: [mainTag], page: Number(routeQuery[pageName]) };
  } else if (pageName in routeQuery && 'tag' in routeQuery) {
    return { tags: [checkedTag], page: Number(routeQuery[pageName]) };
  } else if ('tag' in routeQuery && !('caseStudiesPage' in routeQuery)) {
    return { tags: [checkedTag], page: firstPage };
  } else {
    return { tags: [mainTag], page: firstPage };
  }
};

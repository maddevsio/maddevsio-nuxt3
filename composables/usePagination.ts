import type { LocationQuery, Router } from 'vue-router'
import type { Ref } from 'vue'

interface usePaginationArgs {
  router: Router
  route: any
  mainTagForQuery: string
  mainTagName: string
  pageName: string
  activeTag: string
  currentPage: Ref<number>
  scrollRef: Ref<HTMLElement & { $el: HTMLElement } | null | undefined> | null
  withScrollToStart: boolean
}

export const usePagination = (
  {
    router,
    route,
    mainTagForQuery,
    mainTagName,
    pageName,
    activeTag,
    currentPage,
    scrollRef,
    withScrollToStart = true,
  }: usePaginationArgs) => {
  const scrollToStart = () => {
    if (!scrollRef) {
      return
    }
    const element = scrollRef.value?.$el ? scrollRef.value?.$el : scrollRef.value
    if (!element) {
      return
    }
    if ('scrollIntoView' in element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  const navigateToPage = async (path: string, oldQuery: LocationQuery, newQuery: Record<string, string | number>) => {
    const combinedQuery = { ...oldQuery, ...newQuery }
    await router.push({ path, query: combinedQuery })
    if (!withScrollToStart) {
      return
    }
    scrollToStart()
  }

  const getTagsFromRoute = (tag: string) => {
    if (!tag) {
      return [mainTagForQuery]
    }
    return tag === mainTagName ? [mainTagForQuery] : [tag]
  }

  const changePage = async (page: number) => {
    currentPage.value = page
    if ('tag' in route.query) {
      await navigateToPage(route.path, route.query, {
        tag: route.query.tag as string || activeTag,
        [pageName]: (currentPage.value).toString(),
      })
    } else {
      await navigateToPage(route.path, route.query, { [pageName]: (currentPage.value).toString() })
    }
  }

  return {
    getTagsFromRoute,
    changePage,
  }
}

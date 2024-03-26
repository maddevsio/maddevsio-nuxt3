import { defineStore } from 'pinia'
import type { ResizeObserverInstance } from '~/interfaces/common/commonInterfaces'
export const useGlossaryNavStore = defineStore('glossaryNavStore', () => {
  const searchIsActive = ref(false)
  const navIsOpened = ref(false)
  const searchValue = ref('')
  const activeLetter = ref('A')
  const navHeight = ref(0)
  const resizeObserver = ref<ResizeObserverInstance | null>(null)
  const { isMobile } = useCheckMobile(680)
  const { $eventBus } = useNuxtApp()

  const openSearchPanel = () => {
    if (!isMobile.value) { searchIsActive.value = true }
  }
  const closeSearchPanel = () => {
    if (isMobile.value) {
      searchValue.value = ''
      $eventBus.$emit('clear-search')
    } else {
      searchIsActive.value = false
      searchValue.value = ''
    }
  }

  const clearSearchState = () => {
    searchValue.value = ''
    if (navIsOpened.value) { navIsOpened.value = false }
  }

  const toggleNavPanel = () => {
    navIsOpened.value = !navIsOpened.value
  }

  const searchQuery = debounce((event: any) => {
    const { value } = event.target
    searchValue.value = value
    $eventBus.$emit('search-query', searchValue.value)

    return value
  }, 500)

  const setActiveLetter = (value: string) => {
    activeLetter.value = value
    if (isMobile.value) {
      clearSearchState()
    }
  }

  const updateNavHeight = (value: number) => {
    navHeight.value = value
  }

  const getNavHeight = (glossaryFilterRef: Element) => {
    if (window.ResizeObserver) {
      resizeObserver.value = new ResizeObserver(entries => entries.forEach(entry => {
        if (!entry.contentBoxSize) { return }
        const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize
        updateNavHeight(contentBoxSize.blockSize)
      }))
      resizeObserver.value.observe(glossaryFilterRef)
    }
  }

  return {
    searchIsActive,
    navIsOpened,
    searchValue,
    activeLetter,
    navHeight,
    resizeObserver,
    openSearchPanel,
    closeSearchPanel,
    searchQuery,
    setActiveLetter,
    clearSearchState,
    toggleNavPanel,
    getNavHeight,
  }
})

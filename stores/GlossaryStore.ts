import { defineStore } from 'pinia'

export const useGlossaryStore = defineStore('glossaryStore', () => {
  const searchIsActive = ref(false)
  const navIsOpened = ref(false)
  const searchValue = ref('')
  const activeLetter = ref('A')
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

  return {
    searchIsActive,
    navIsOpened,
    searchValue,
    activeLetter,
    openSearchPanel,
    closeSearchPanel,
    searchQuery,
    setActiveLetter,
    clearSearchState,
    toggleNavPanel,
  }
})

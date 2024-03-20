<script setup lang="ts">
import { GlossaryMainPageContent } from '~/components/Glossary/Main/classes/GlossaryMainPageContent'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'

const glossaryService = inject('glossaryService') as IGlossaryService
const route = useRoute()

const glossaryNavStore = useGlossaryNavStore()
const { searchIsActive, activeLetter } = storeToRefs(glossaryNavStore)
const { closeSearchPanel, setActiveLetter } = glossaryNavStore
const {
  isSearching,
  isLoading,
  isLoadingMore,
  showAllWords,
  words,
  wordsBySearch,
  observer,
  loadAllWords,
  loadMoreWordsByLetter,
  searchWordsByValue,
  clearSearchResults,
  initIntersectionObserverForSections,
} = new GlossaryMainPageContent(glossaryService, searchIsActive)

const { $eventBus } = useNuxtApp()
const timeoutID = ref<ReturnType<typeof setTimeout> | null>(null)

$eventBus.$on('load-more-words', loadMoreWordsByLetter)
$eventBus.$on('search-query', searchWordsByValue)
$eventBus.$on('clear-search', clearSearchResults)

onMounted(async () => {
  await loadAllWords()
  timeoutID.value = setTimeout(() => {
    if (route.hash) {
      const element = document.querySelector(route.hash)
      if (element) {
        setActiveLetter(route.hash.replace('#', ''))
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }, 200)
  initIntersectionObserverForSections(setActiveLetter, activeLetter)
})

onUnmounted(() => {
  $eventBus.$off('search-query')
  $eventBus.$off('load-more-words')
  $eventBus.$off('clear-search')
  closeSearchPanel()
  if (timeoutID.value) { clearTimeout(timeoutID.value) }
  if (observer.value) { observer.value?.disconnect() }
})

watch(searchIsActive, val => {
  if (!val) {
    clearSearchResults()
  }
})
</script>

<template>
  <div class="glossary-main-content">
    <ClientOnly>
      <LazyGlossaryToolBar />
    </ClientOnly>
    <div v-if="!isLoading" class="glossary-main-content__wrapper">
      <LazyGlossaryMainSearchResults
        v-if="isSearching && wordsBySearch.length"
        :words="wordsBySearch"
      />
      <LazyGlossaryUISearchNotFoundResult v-if="isSearching && !wordsBySearch.length" />
      <div
        v-if="!wordsBySearch.length"
        class="glossary-main-content__container container"
      >
        <GlossaryMainWordsSection
          v-for="(value, name) in words"
          :key="name"
          :letter-title="name"
          :words="value"
          :show-all-words="showAllWords"
          :is-loading-more="isLoadingMore"
        />
      </div>
    </div>
    <LazySharedLoadersSpinnerLoader
      v-if="isLoading"
      class="glossary-main-content__loader"
    />
  </div>
</template>

<style lang="scss" scoped>
.glossary-main-content {
  padding-bottom: 96px;

  @media screen and (max-width: 768px) {
    padding-bottom: 72px;
  }

  &__loader {
    margin: 30px auto;
  }
}
</style>

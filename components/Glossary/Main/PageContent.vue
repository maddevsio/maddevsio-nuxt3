<script setup lang="ts">
import { GlossaryMainPageContent } from '~/components/Glossary/Main/classes/GlossaryMainPageContent'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'

const { headerHeight } = storeToRefs(useHeaderStore())
const glossaryService = inject('glossaryService') as IGlossaryService
const route = useRoute()

const glossaryStore = useGlossaryStore()
const { searchIsActive } = storeToRefs(glossaryStore)
const { closeSearchPanel } = glossaryStore
const {
  isSearching,
  isLoading,
  isLoadingMore,
  showAllWords,
  words,
  wordsBySearch,
  loadInitialGlossaryState,
  loadMoreWordsByLetter,
  searchWordsByValue,
  clearSearchResults,
} = new GlossaryMainPageContent(glossaryService, searchIsActive)

const { $eventBus } = useNuxtApp()

$eventBus.$on('load-more-words', loadMoreWordsByLetter)
$eventBus.$on('search-query', searchWordsByValue)
$eventBus.$on('clear-search', clearSearchResults)

onMounted(async () => {
  await loadInitialGlossaryState()
})

onUnmounted(() => {
  $eventBus.$off('search-query')
  $eventBus.$off('load-more-words')
  $eventBus.$off('clear-search')
  closeSearchPanel()
})

watch(searchIsActive, val => {
  if (!val) {
    clearSearchResults()
  }
})

</script>

<template>
  <div
    ref="glossaryMainContent"
    class="glossary-main-content"
    :style="`scroll-margin-top: ${headerHeight + 60}px`"
  >
    <ClientOnly>
      <LazyGlossaryToolBar />
    </ClientOnly>
    <LazyGlossaryMainSearchResults
      v-if="isSearching && wordsBySearch.length"
      :words="wordsBySearch"
    />
    <LazyGlossaryUISearchNotFoundResult v-if="isSearching && !wordsBySearch.length" />
    <div
      v-if="!wordsBySearch.length"
      class="glossary-main-content__container container"
    >
      <LazyGlossaryMainWordsSection
        v-for="(value, name) in words"
        :key="name"
        :letter-title="name"
        :words="value"
        :show-all-words="showAllWords"
        :is-loading-more="isLoadingMore"
      />
      <LazySharedLoadersSpinnerLoader
        v-if="isLoading"
        class="glossary-main-content__loader"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.glossary-main-content {
  padding-bottom: 96px;

  @media screen and (max-width: 768px) {
    padding-bottom: 72px;
  }

  &__observer {
    height: 50px;
  }

  &__container {
    min-height: 500px;
  }

  &__loader {
    margin: 30px auto;
  }
}
</style>

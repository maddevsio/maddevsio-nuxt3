import type { Ref } from 'vue'
import { sortGlossaryWords } from '~/components/Glossary/helpers/sortGlossaryWords'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'
import { mergeAndSortGlossaryWords } from '~/components/Glossary/helpers/mergeAndSortGlossaryWords'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'
import type { IGlossaryMainPageContent } from '~/components/Glossary/Main/interfaces/IGlossaryMainPageContent'

export class GlossaryMainPageContent implements IGlossaryMainPageContent {
  glossaryService: IGlossaryService
  searchIsActive: Ref<boolean>
  showAllWords: Ref<boolean>
  isSearching: Ref<boolean>
  isLoading: Ref<boolean>
  isLoadingMore: Ref<boolean>
  words: Ref<Record<string, IGlossaryWord[] | never[]>>
  wordsBySearch: Ref<IGlossaryWord[] | never[]>

  currentPage = 1
  constructor(glossaryServiceInstance: IGlossaryService, searchIsActive: Ref<boolean>) {
    this.glossaryService = glossaryServiceInstance
    this.searchIsActive = searchIsActive
    this.showAllWords = ref(false)
    this.isSearching = ref(false)
    this.isLoading = ref(false)
    this.isLoadingMore = ref(false)
    this.words = ref({})
    this.wordsBySearch = ref([])

    this.loadInitialGlossaryState = this.loadInitialGlossaryState.bind(this)
    this.loadMoreWordsByLetter = this.loadMoreWordsByLetter.bind(this)
    this.searchWordsByValue = this.searchWordsByValue.bind(this)
    this.clearSearchResults = this.clearSearchResults.bind(this)
  }

  async loadMoreWordsByLetter(letter: string) {
    const tag = `Words ${ letter }`
    this.isLoadingMore.value = true
    const pages = await this.glossaryService.getAllGlossaryPages(this.currentPage, [tag])
    const result = sortGlossaryWords(transformGlossaryWords(pages))
    this.words.value = mergeAndSortGlossaryWords(this.words.value, result)
    this.isLoadingMore.value = false
    this.showAllWords.value = true
  }

  async loadInitialGlossaryState() {
    this.showAllWords.value = false
    const pages = await this.glossaryService.getAllGlossaryPages(this.currentPage)
    if (!pages.length) { return }
    this.words.value = sortGlossaryWords(transformGlossaryWords(pages))
  }

  async searchWordsByValue(value: string) {
    const result = await this.glossaryService.getAllWordsBySearch(
      this.currentPage,
      'glossary',
      'word_title',
      'Glossary',
      value,
      { field: 'my.glossary.word_title', direction: 'desc' })
    this.wordsBySearch.value = transformGlossaryWords(result)
    this.isSearching.value = true
    if (!value.length) {
      this.clearSearchResults()
    }
  }

  clearSearchResults() {
    this.wordsBySearch.value = []
    this.isSearching.value = false
  }
}

import { ref, type Ref } from 'vue'
import { sortGlossaryWords } from '~/components/Glossary/helpers/sortGlossaryWords'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'
import { mergeAndSortGlossaryWords } from '~/components/Glossary/helpers/mergeAndSortGlossaryWords'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'
import type { IGlossaryMainPageContent } from '~/components/Glossary/Main/interfaces/IGlossaryMainPageContent'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class GlossaryMainPageContent implements IGlossaryMainPageContent {
  glossaryService: IGlossaryService
  searchIsActive: Ref<boolean>
  showAllWords: Ref<boolean>
  isSearching: Ref<boolean>
  isLoading: Ref<boolean>
  isLoadingMore: Ref<boolean>
  words: Ref<Record<string, IGlossaryWord[] | never[]>>
  wordsBySearch: Ref<IGlossaryWord[] | never[]>
  sections: Ref<NodeListOf<Element> | never[]>

  observer: Ref<IntersectionObserverInstance | null>

  currentPage = 1
  intersectionOptions = {
    threshold: 0,
    rootMargin: '-10% 0px -75% 0px',
  }

  constructor(glossaryServiceInstance: IGlossaryService, searchIsActive: Ref<boolean>) {
    this.glossaryService = glossaryServiceInstance
    this.searchIsActive = searchIsActive
    this.showAllWords = ref(false)
    this.isSearching = ref(false)
    this.isLoading = ref(false)
    this.isLoadingMore = ref(false)
    this.words = ref({})
    this.wordsBySearch = ref([])
    this.sections = ref([])
    this.observer = ref<IntersectionObserverInstance | null>(null)

    this.loadAllWords = this.loadAllWords.bind(this)
    this.loadMoreWordsByLetter = this.loadMoreWordsByLetter.bind(this)
    this.searchWordsByValue = this.searchWordsByValue.bind(this)
    this.clearSearchResults = this.clearSearchResults.bind(this)
    this.initIntersectionObserverForSections = this.initIntersectionObserverForSections.bind(this)
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

  async loadAllWords() {
    this.isLoading.value = true
    this.showAllWords.value = false
    const pages = await this.glossaryService.getAllGlossaryPages(this.currentPage)
    if (!pages.length) { return }
    this.words.value = sortGlossaryWords(transformGlossaryWords(pages))
    this.isLoading.value = false
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

  initIntersectionObserverForSections(setActiveTitle: (letter: string) => void, activeTitle: Ref<string>) {
    this.sections.value = document.querySelectorAll('.glossary-words-section__title')
    this.observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id
          if (targetId && activeTitle.value !== targetId) {
            setActiveTitle(targetId)
          }
        }
      })
    }, this.intersectionOptions)

    this.sections.value.forEach(section => {
      if (this.observer.value) {
        this.observer.value.observe(section)
      }
    })
  }
}

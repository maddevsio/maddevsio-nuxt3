import type { Ref } from 'vue'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export interface IGlossaryMainPageContent {
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
  loadMoreWordsByLetter(letter: string): Promise<void>
  loadInitialGlossaryState(): Promise<void>
  searchWordsByValue(value: string): Promise<void>
  clearSearchResults(): void
  initIntersectionObserverForSections(setActiveTitle: (letter: string) => void, activeTitle: Ref<string>): void
}

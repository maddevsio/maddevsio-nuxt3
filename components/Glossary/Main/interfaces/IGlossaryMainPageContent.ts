import type { Ref } from 'vue'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'

export interface IGlossaryMainPageContent {
  glossaryService: IGlossaryService
  searchIsActive: Ref<boolean>
  showAllWords: Ref<boolean>
  isSearching: Ref<boolean>
  isLoading: Ref<boolean>
  isLoadingMore: Ref<boolean>
  words: Ref<Record<string, IGlossaryWord[] | never[]>>
  wordsBySearch: Ref<IGlossaryWord[] | never[]>
  loadMoreWordsByLetter(letter: string): Promise<void>
  loadInitialGlossaryState(): Promise<void>
  searchWordsByValue(value: string): Promise<void>
  clearSearchResults(): void
}

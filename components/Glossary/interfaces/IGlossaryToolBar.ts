import type { Router } from 'vue-router'
import type { ComputedRef, Ref } from 'vue'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'

export interface IGlossaryToolBar {
  alphabetArray: string[]
  route: any
  router: Router
  headerHeight: number
  activeLetters: Ref<string[]>
  isScrolling: Ref<boolean>
  initialNavOffset: Ref<number>
  glossaryFilterRef: Ref<HTMLElement | null>
  homePage: ComputedRef<boolean>
  getAllGlossaryPages: IGlossaryService['getAllGlossaryPages']
  filterClasses: ComputedRef<{[key: string]: boolean | undefined}[]>
  currentActiveLetter: Ref<string>
  searchValue: Ref<string>
  isMobile: Ref<boolean>
  getLettersForFilter(): Promise<void>
  checkWordsForLetter(letter: string): boolean
  addClassesToLetter(letter: string): {[key: string]: boolean | undefined}[]
  navigateToHomePage(letter: string): void
  updateIsScrolling(): void
}

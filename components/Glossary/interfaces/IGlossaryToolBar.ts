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
  currentActiveLetter: Ref<string>
  getAllGlossaryPages: IGlossaryService['getAllGlossaryPages']
  getLettersForFilter(): Promise<void>
  checkWordsForLetter(letter: string): boolean
  addClassesToLetter(letter: string): (string | { 'glossary-words-filter__button--disabled': boolean })[]
  navigateToHomePage(letter: string): void
  updateIsScrolling(): void
}

import type { Router } from 'vue-router'
import type { ComputedRef, Ref } from 'vue'

export interface IGlossaryToolBar {
  alphabetArray: string[]
  route: any
  router: Router
  activeLetters: Ref<string[]>
  searchIsActive: Ref<boolean>
  withoutSearch: ComputedRef<boolean>
  currentActiveLetter: string
  getAllGlossaryPages: Function
  getLettersForFilter(): Promise<void>
  filterWordsByLetter(letter: string): void
  checkWordsForLetter(letter: string): boolean
  addClassesToLetter(letter: string): (string | { 'glossary-words-filter__button--disabled': boolean; 'glossary-words-filter__button--active': boolean; })[]
  navigateToHomePage(letter: string): void
}

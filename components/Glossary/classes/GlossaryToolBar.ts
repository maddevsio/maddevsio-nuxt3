import type { Router } from 'vue-router'
import type { ComputedRef, Ref } from 'vue'
import { createAlphabetArray } from '~/utils/createAlphabetArray'
import type { IGlossaryToolBar } from '~/components/Glossary/interfaces/IGlossaryToolBar'
import { sortGlossaryWords } from '~/components/Glossary/helpers/sortGlossaryWords'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'
import type { IGlossaryService } from '~/components/Glossary/interfaces/IGlossaryService'

export class GlossaryToolBar implements IGlossaryToolBar {
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
  currentActiveLetter: Ref<string>

  currentPage = 1

  constructor(
    route: any,
    router: Router,
    headerHeight: number,
    getAllGlossaryPages: IGlossaryService['getAllGlossaryPages'],
    currentActiveLetter: Ref<string>) {
    this.alphabetArray = createAlphabetArray()
    this.route = route
    this.router = router
    this.headerHeight = headerHeight
    this.activeLetters = ref([])
    this.isScrolling = ref(false)
    this.initialNavOffset = ref(0)
    this.glossaryFilterRef = ref(null)
    this.homePage = computed(() => this.route.path === '/glossary/')
    this.currentActiveLetter = currentActiveLetter
    this.getAllGlossaryPages = getAllGlossaryPages

    this.getLettersForFilter = this.getLettersForFilter.bind(this)
    this.checkWordsForLetter = this.checkWordsForLetter.bind(this)
    this.addClassesToLetter = this.addClassesToLetter.bind(this)
    this.navigateToHomePage = this.navigateToHomePage.bind(this)
    this.updateIsScrolling = this.updateIsScrolling.bind(this)
    this.setInitialNavOffset = this.setInitialNavOffset.bind(this)
  }

  async getLettersForFilter() {
    const result = await this.getAllGlossaryPages(this.currentPage)
    const words = sortGlossaryWords(transformGlossaryWords(result) as IGlossaryWord[])
    this.activeLetters.value = Object.keys(words).sort((a, b) => a.localeCompare(b))
  }

  checkWordsForLetter(letter: string) {
    return this.activeLetters.value.includes(letter)
  }

  addClassesToLetter(letter: string) {
    return ['glossary-words-filter__button',
      { 'glossary-words-filter__button--disabled': !this.checkWordsForLetter(letter) }]
  }

  navigateToHomePage(letter: string) {
    this.router.push({
      path: '/glossary/',
      hash: `#${ letter }`,
    })
  }

  setInitialNavOffset() {
    if (this.glossaryFilterRef?.value) {
      this.initialNavOffset.value = this.glossaryFilterRef?.value?.offsetTop
    }
  }

  updateIsScrolling() {
    if (process.client) {
      this.isScrolling.value = window.scrollY + this.headerHeight >= this.initialNavOffset.value
    }
  }
}

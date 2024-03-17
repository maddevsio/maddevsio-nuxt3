import type { Router } from 'vue-router'
import type { ComputedRef, Ref } from 'vue'
import { createAlphabetArray } from '~/utils/createAlphabetArray'
import type { IGlossaryToolBar } from '~/components/Glossary/interfaces/IGlossaryToolBar'
import { sortGlossaryWords } from '~/components/Glossary/helpers/sortGlossaryWords'
import { transformGlossaryWords } from '~/components/Glossary/helpers/transformGlossaryWords'
import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'

export class GlossaryToolBar implements IGlossaryToolBar {
  alphabetArray: string[]
  route: any
  router: Router
  activeLetters: Ref<string[]>
  searchIsActive: Ref<boolean>
  withoutSearch: ComputedRef<boolean>
  getAllGlossaryPages: Function
  currentActiveLetter: string

  currentPage = 1

  constructor(route: any, router: Router, getAllGlossaryPages: Function, currentActiveLetter: string) {
    this.alphabetArray = createAlphabetArray()
    this.route = route
    this.router = router
    this.activeLetters = ref([])
    this.searchIsActive = ref(false)
    this.withoutSearch = computed(() => this.route.path !== '/glossary/')
    this.currentActiveLetter = currentActiveLetter
    this.getAllGlossaryPages = getAllGlossaryPages

    this.getLettersForFilter = this.getLettersForFilter.bind(this)
    this.filterWordsByLetter = this.filterWordsByLetter.bind(this)
    this.checkWordsForLetter = this.checkWordsForLetter.bind(this)
    this.addClassesToLetter = this.addClassesToLetter.bind(this)
    this.hideNavButtons = this.hideNavButtons.bind(this)
    this.showNavButtons = this.showNavButtons.bind(this)
    this.navigateToHomePage = this.navigateToHomePage.bind(this)
  }

  async getLettersForFilter() {
    const result = await this.getAllGlossaryPages(this.currentPage)
    const words = sortGlossaryWords(transformGlossaryWords(result) as IGlossaryWord[])
    this.activeLetters.value = Object.keys(words).sort((a, b) => a.localeCompare(b))
  }

  filterWordsByLetter(letter: string) {
    if (this.route.value.path !== '/glossary/') {
      this.navigateToHomePage(letter)
    }

    // emit('filterWords', letter)
  }

  checkWordsForLetter(letter: string) {
    return this.activeLetters.value.includes(letter)
  }

  addClassesToLetter(letter: string) {
    return ['glossary-words-filter__button', {
      'glossary-words-filter__button--disabled': !this.checkWordsForLetter(letter),
      'glossary-words-filter__button--active': this.currentActiveLetter === letter,
    },
    ]
  }

  hideNavButtons(value: boolean) {
    this.searchIsActive.value = value
  }

  showNavButtons(value: boolean) {
    this.searchIsActive.value = value
    // emit('checkSearchActive', value)
  }

  navigateToHomePage(letter: string) {
    this.router.push({
      path: '/glossary/',
      query: {
        tag: letter,
      },
    })
  }
}

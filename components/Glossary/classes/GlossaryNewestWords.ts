import type { ComputedRef, Ref } from 'vue'
import type { GlossaryWord, IGlossaryNewestWords } from '~/components/Glossary/interfaces/IGlossaryNewestWords'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

export class GlossaryNewestWords implements IGlossaryNewestWords {
  allLastWords: GlossaryWord[]
  isShowMore: Ref<boolean>
  lastWords: ComputedRef<GlossaryWord[]>

  constructor(wordsData: GlossaryPage[]) {
    this.allLastWords = transformGlossaryWords(wordsData)

    this.isShowMore = ref(false)
    this.lastWords = computed(() => {
      if (!this.allLastWords || !this.allLastWords) { return [] }
      if (this.allLastWords.length === 4) { return this.allLastWords }
      if (this.allLastWords.length > 4 && !this.isShowMore.value) { return this.allLastWords.slice(0, 3) }
      return this.allLastWords
    })

    this.showMore = this.showMore.bind(this)
  }

  showMore() {
    this.isShowMore.value = true
  }
}

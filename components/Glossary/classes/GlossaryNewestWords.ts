import type { GlossaryWord, IGlossaryNewestWords } from '~/components/Glossary/interfaces/IGlossaryNewestWords'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

export class GlossaryNewestWords implements IGlossaryNewestWords {
  lastWords: GlossaryWord[]

  constructor(wordsData: GlossaryPage[]) {
    this.lastWords = transformGlossaryWords(wordsData)
  }
}

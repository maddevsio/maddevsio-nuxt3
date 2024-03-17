import type { GlossaryWord, IGlossaryNewestWords } from '~/components/Glossary/interfaces/IGlossaryNewestWords'
import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'
import { transformGlossaryWords } from '~/components/Glossary/helpers/transformGlossaryWords'

export class GlossaryNewestWords implements IGlossaryNewestWords {
  lastWords: GlossaryWord[]

  constructor(wordsData: GlossaryPost[]) {
    this.lastWords = transformGlossaryWords(wordsData)
  }
}

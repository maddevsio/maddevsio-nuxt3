import type { KeyTextField } from '@prismicio/client'
import type { ComputedRef, Ref } from 'vue'

export interface GlossaryWord {
  wordTitle: KeyTextField
  wordUID: string
  tags: string[]
}

export interface IGlossaryNewestWords {
  allLastWords: GlossaryWord[]
  isShowMore: Ref<boolean>
  lastWords: ComputedRef<GlossaryWord[]>
}

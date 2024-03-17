import type { KeyTextField } from '@prismicio/client'

export interface GlossaryWord {
  wordTitle: KeyTextField,
  wordUID: string,
}

export interface IGlossaryNewestWords {
  lastWords: GlossaryWord[]
}

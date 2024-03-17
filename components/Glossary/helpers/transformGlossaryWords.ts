import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'

export const transformGlossaryWords = (pages: GlossaryPost[]) => pages.map(result => ({
  wordTitle: result.data.word_title,
  wordUID: result.uid,
}))

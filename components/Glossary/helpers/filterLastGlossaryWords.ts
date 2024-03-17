import type { KeyTextField } from '@prismicio/client'
import type { GlossaryPost } from '~/interfaces/common/commonInterfaces'

export const filterLastGlossaryWords = (pages: GlossaryPost[], currentWordTitle: KeyTextField) => {
  return pages.filter((page: GlossaryPost) => page?.data?.word_title !== currentWordTitle).slice(0, 4)
}

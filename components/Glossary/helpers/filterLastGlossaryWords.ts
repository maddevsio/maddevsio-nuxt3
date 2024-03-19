import type { KeyTextField } from '@prismicio/client'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

export const filterLastGlossaryWords = (pages: GlossaryPage[], currentWordTitle: KeyTextField) => {
  return pages.filter((page: GlossaryPage) => page?.data?.word_title !== currentWordTitle).slice(0, 4)
}

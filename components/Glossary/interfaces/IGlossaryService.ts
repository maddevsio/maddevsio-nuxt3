import type { Ordering, Query } from '@prismicio/client'
import type { AllDocumentTypes, GlossaryDocument } from '~/prismicio-types'
import type { GlossaryPage } from '~/interfaces/common/commonInterfaces'

export interface IGlossaryService {
  getGlossaryPageContent(uid: string): Promise<GlossaryDocument<string>>
  getGlossaryPages(pageSize?: number, page?: number, tag?: string[], orderings?: string | Ordering | (string | Ordering)[] | undefined): Promise<Query<AllDocumentTypes>>
  getAllGlossaryPages(page: number, tag?: string[]): Promise<GlossaryPage[]>
  loadWordsBySearch(type: string, field: string, tags: string, queryValue: string, orderings?: string | Ordering | (string | Ordering)[] | undefined): Promise<Query<AllDocumentTypes>>
  getAllWordsBySearch(page: number | undefined, type: string, field: string, tags: string, queryValue: string, orderings?: string | Ordering | (string | Ordering)[] | undefined): Promise<GlossaryPage[]>
}

import type { IWriteupList } from '~/components/Writeup/interfaces/IWriteupList'
import type { ActiveTag } from '~/stores/DynamicTagCloudStore'

export interface IWriteupMainContent extends IWriteupList {
  activeTag: ActiveTag
  pageName: string
  mainTagForQuery: string
  mainTagName: string
  firstPage: number
  scrollToStart(): void
  navigateToPage (path: string, query: Record<string, string | number>): Promise<void>
  getTagsFromRoute(tag: string): string[]
  getWriteups(page: number, tags?: string[]): Promise<void>
  changePage(page: number): Promise<void>
}

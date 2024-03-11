import type { IWriteupList } from '~/components/Writeup/interfaces/IWriteupList'
import type { ActiveTag } from '~/stores/DynamicTagCloudStore'

export interface IWriteupMainContent extends IWriteupList {
  activeTag: ActiveTag
  scrollToStart(): void
  getWriteups(page: number, tags?: string[]): Promise<void>
  changePage(page: number): Promise<void>
}

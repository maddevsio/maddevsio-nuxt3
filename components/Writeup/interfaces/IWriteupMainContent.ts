import type { IWriteupList } from '~/components/Writeup/interfaces/IWriteupList'

export interface IWriteupMainContent extends IWriteupList {
  pageName: string
  mainTagForQuery: string
  firstPage: number
  extraIndentFromHeader: number
  getWriteups(page: number, tags?: string[]): Promise<void>
}

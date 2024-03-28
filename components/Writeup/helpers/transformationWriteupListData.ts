import type { TransformedWriteup, Writeups } from '~/components/Writeup/interfaces/IWriteupList'
import { transformationWriteupItems } from '~/components/Writeup/helpers/transformationWriteupItems'

interface TransformedData {
  totalPages: number
  nextPage: string | null
  prevPage: string | null
  writeupList: TransformedWriteup[]
}

export const transformationWriteupListData = (writeups: Writeups): TransformedData => {
  const writeupList = transformationWriteupItems(writeups.results)

  return {
    totalPages: writeups?.total_pages,
    nextPage: writeups?.next_page,
    prevPage: writeups?.prev_page,
    writeupList,
  }
}

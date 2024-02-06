import type { TransformedWriteup, Writeups } from '~/components/Writeup/interfaces/IWriteupList'

interface TransformedData {
  totalPages: number
  nextPage: string | null
  prevPage: string | null
  writeupList: TransformedWriteup[]
}

export const transformationWriteupListData = (writeups: Writeups): TransformedData => {
  const writeupList = writeups.results && writeups.results.length
    ? writeups.results.map(writeup => ({
      uid: writeup.uid,
      date: formatDate(writeup.data.created_date, true),
      title: writeup.data.title,
      tags: writeup.tags.filter(tag => tag !== 'Writeup'),
      author: {
        name: writeup?.data?.author?.data?.name,
        position: writeup?.data?.author?.data?.position,
        uid: writeup?.data?.author?.data?.uid,
        image: writeup?.data?.author?.data?.image,
      },
    }))
    : []

  return {
    totalPages: writeups?.total_pages,
    nextPage: writeups?.next_page,
    prevPage: writeups?.prev_page,
    writeupList,
  }
}

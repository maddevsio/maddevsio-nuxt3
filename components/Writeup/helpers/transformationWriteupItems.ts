import type { Writeup } from '~/components/Writeup/interfaces/IWriteupList'

export const transformationWriteupItems = (writeups: Writeup[]) => writeups.map(writeup => ({
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

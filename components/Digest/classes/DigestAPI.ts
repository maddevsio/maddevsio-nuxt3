import dayjs from 'dayjs'
import type { PrismicPlugin } from '@prismicio/vue'
import type { FetchDigestsProps } from '~/components/Digest/interfaces/IDigests'
import { fetchLinks } from '~/config/constants'

export class DigestAPI {
  async getDigests(
    {
      prismic,
      year,
      filter,
      date,
      page,
      pageSize,
    }: FetchDigestsProps): Promise<any> {
    try {
      return await prismic.client.get({
        filters: [
          prismic.filter.at('document.type', 'digest'),
          year ? prismic.filter.dateYear('my.digest.date', Number(year)) : '',
          !filter ? prismic.filter.dateBefore('my.digest.date', dayjs(date).format()) : '',
        ].filter(Boolean),
        orderings: {
          field: 'my.digest.date',
          direction: 'desc',
        },
        pageSize,
        page,
      })
    } catch (error) {
      return error
    }
  }

  async getAllDigests(prismic: PrismicPlugin): Promise<any> {
    try {
      return await prismic.client.get({
        filters: [
          prismic.filter.at('document.type', 'digest'),
          prismic.filter.dateBetween('my.digest.date', dayjs(new Date('01/01/2022')).format(), dayjs().format()),
        ],
        orderings: {
          field: 'my.digest.date',
        },
        pageSize: 100,
      })
    } catch (error) {
      return error
    }
  }

  async getDigestPost (prismic: PrismicPlugin, uid: string) {
    try {
      const response = await prismic.client.getByUID('digest', uid, {
        fetchLinks,
      })
      return response
    } catch (error) {
      return error
    }
  }
}

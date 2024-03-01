import type { PrismicPlugin } from '@prismicio/vue'
import type {
  Digest,
  DigestResponse,
  TransformedDigest,
  TransformedDigestsData,
} from '~/components/Digest/interfaces/IDigests'

const extractOrderNumber = (title: string):string => {
  const regex = /#\d+/
  return title.match(regex) ? title.match(regex)![0] : ''
}

export const transformationDigestListData = (results: Digest[], $prismic: PrismicPlugin):TransformedDigest[] => {
  return results.map((item):TransformedDigest => {
    return <TransformedDigest>{
      uid: item?.uid,
      title: $prismic.asText(item?.data?.title),
      subtitle: $prismic.asText(item?.data?.subtitle),
      orderNumber: extractOrderNumber($prismic.asText(item?.data?.title)),
      date: formatDate(item?.data?.date, true),
    }
  })
}

export const transformationDigestsData = (response: DigestResponse, $prismic: PrismicPlugin) :TransformedDigestsData => {
  const digestList = transformationDigestListData(response.results as Digest[], $prismic)

  return {
    digestList,
    totalPages: response.total_pages,
    nextPage: response.next_page,
    prevPage: response.prev_page,
  }
}

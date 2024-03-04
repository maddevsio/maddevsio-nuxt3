import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DateField, RichTextField } from '@prismicio/client'
import type { DigestSelectOption } from '~/components/Digest/interfaces/IDigestSelect'

export interface IDigestsProps {
  uid: string
  date: Date
}

export interface Digest {
  uid: string
  data: {
    title: RichTextField
    subtitle: RichTextField
    date: DateField
  }
}

export interface TransformedDigest {
  uid: string
  title: string
  subtitle: string
  orderNumber: string
  date: string
}

export interface FetchDigestsProps {
  prismic: PrismicPlugin
  year: string
  filter: boolean
  date: Date
  page?: number
  pageSize?: number
}

export interface DigestResponse {
  results: Digest[]
  total_pages: number
  next_page: string | null
  prev_page: string | null
}

export interface TransformedDigestsData {
  digestList: TransformedDigest[]
  totalPages: number,
  nextPage: string | null
  prevPage: string | null
}

export interface IDigests {
  digestsData: Ref<TransformedDigestsData | null>
  digestOption: Ref<DigestSelectOption>
  uid: string
  date: Date
  prismic: PrismicPlugin
  filterDigests(response: DigestResponse, prismic: PrismicPlugin):TransformedDigestsData
  fetchDigests(props: FetchDigestsProps):Promise<void>
  handleChangeYear(option: DigestSelectOption):Promise<void>
}

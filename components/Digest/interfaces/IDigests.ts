import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { RichTextField } from '@prismicio/types'

export interface IDigestsProps {
  uid: string
  date: Date
}

export interface Digest {
  uid: string
  data: {
    title: RichTextField
    subtitle: RichTextField
    date: string
  }
}

export interface TransformedDigest {
  uid: string
  title: string
  subtitle: string
  orderNumber: string
  date: string
}

export interface DigestSelectOption {
  label: string
  year: string
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
  digestsData: Ref<TransformedDigestsData | {}>
  digestOption: Ref<DigestSelectOption>
  uid: string
  date: Date
  prismic: PrismicPlugin
  filterDigests(response: DigestResponse, prismic: PrismicPlugin):TransformedDigestsData
  fetchDigests(props: FetchDigestsProps):Promise<void>
  handleChangeYear(option: DigestSelectOption):Promise<void>
}

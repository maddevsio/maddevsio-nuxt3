import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DateField, ImageField, RichTextField } from '@prismicio/client'
import type { DigestSelectOption } from '~/components/Digest/interfaces/IDigestSelect'

export interface IDigestsProps {
  uid: string
  date: Date | string
}

export interface Digest {
  uid: string
  data: {
    title: RichTextField
    subtitle: RichTextField
    featuredImage: ImageField
    date: DateField
  }
}

export interface TransformedDigest {
  uid: string
  title: string
  subtitle: string
  featuredImage: ImageField
  orderNumber: string
  date: string
}

export interface FetchDigestsProps {
  prismic: PrismicPlugin
  year?: string
  filter?: boolean
  date?: Date | string
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
  date: Date | string
  prismic: PrismicPlugin
  filterDigests(response: DigestResponse, prismic: PrismicPlugin): TransformedDigestsData
  fetchDigests(props: FetchDigestsProps): Promise<void>
  handleChangeYear(option: DigestSelectOption): Promise<void>
}

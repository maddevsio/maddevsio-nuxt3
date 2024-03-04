import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import { DigestAPI } from './DigestAPI'
import type {
  DigestResponse,
  FetchDigestsProps,
  IDigests,
  IDigestsProps,
  TransformedDigestsData,
} from '~/components/Digest/interfaces/IDigests'
import { transformationDigestsData } from '~/components/Digest/helpers/transformationDigestsData'
import type { DigestSelectOption } from '~/components/Digest/interfaces/IDigestSelect'
export class Digests implements IDigests {
  digestsData: Ref<TransformedDigestsData | null>
  digestOption: Ref<DigestSelectOption>
  uid: string
  date: Date
  prismic: PrismicPlugin
  constructor(props: IDigestsProps, prismic: PrismicPlugin) {
    this.digestsData = ref(null)
    this.digestOption = ref({ label: '', year: '' })
    this.uid = props.uid
    this.date = props.date
    this.prismic = prismic

    this.handleChangeYear = this.handleChangeYear.bind(this)
    this.fetchDigests = this.fetchDigests.bind(this)

    markRaw(this)
  }

  filterDigests(response: DigestResponse, prismic: PrismicPlugin) :TransformedDigestsData {
    const digests = transformationDigestsData(response, prismic)
    return {
      ...digests,
      ...digests?.digestList.filter(digest => digest.uid !== this.uid),
    }
  }

  async fetchDigests({
    prismic,
    year = '',
    filter = false,
    date = new Date(),
    page = 1,
    pageSize = 100,
  }: FetchDigestsProps) {
    const response = await new DigestAPI().getDigests({ prismic, year, filter, date, page, pageSize })
    this.digestsData.value = this.uid ? this.filterDigests(response, prismic) : transformationDigestsData(response, prismic)
  }

  async handleChangeYear(option: DigestSelectOption) {
    await this.fetchDigests({ prismic: this.prismic, year: option.year, filter: true, date: this.date })
    this.digestOption.value = option
  }
}

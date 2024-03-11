import type { Ref, UnwrapRef } from 'vue'
import dayjs from 'dayjs'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DigestSelectDate, DigestSelectOption, IDigestSelect } from '~/components/Digest/interfaces/IDigestSelect'
import type { Digest } from '~/components/Digest/interfaces/IDigests'
import { DigestAPI } from '~/components/Digest/classes/DigestAPI'

export class DigestSelect implements IDigestSelect {
  prismic: PrismicPlugin
  currentOption: Ref<DigestSelectOption>
  selectDigestOptions: Ref<UnwrapRef<(false | { year: string; label: string })[]>>
  constructor(prismic: PrismicPlugin, setAllDigestsOption: boolean) {
    this.prismic = prismic
    this.currentOption = ref({ label: 'Digests of the Year', year: '' })
    this.selectDigestOptions = ref([setAllDigestsOption && { label: 'All digests', year: '' }].filter(Boolean))

    this.createSelectOptionsList = this.createSelectOptionsList.bind(this)
  }

  createSelectOption(date: DigestSelectDate) {
    return {
      label: `Digest of the ${ date ? dayjs(new Date(date)).year() : 'Digest of the Year' }`,
      year: date ? (dayjs(new Date(date)).year()).toString() : '',
    }
  }

  async createSelectOptionsList () {
    const response = await new DigestAPI().getAllDigests(this.prismic)

    this.selectDigestOptions.value = [...this.selectDigestOptions.value, ...response.results.reduce((acc: DigestSelectOption[], result: Digest) => {
      if (!acc.length) {
        acc.push(this.createSelectOption(result.data?.date))
      } else {
        if (acc.find((item :DigestSelectOption) => item.year === dayjs(result.data.date).year().toString())) {
          return acc
        }
        acc.push(this.createSelectOption(result.data?.date))
      }

      return acc
    }, [])]
  }
}

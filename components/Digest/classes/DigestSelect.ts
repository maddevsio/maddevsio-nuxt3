import type { Ref, UnwrapRef } from 'vue'
import dayjs from 'dayjs'
import type { PrismicPlugin } from '@prismicio/vue'
import type { IDigestSelect } from '~/components/Digest/interfaces/IDigestSelect'
import type { Digest, DigestSelectOption } from '~/components/Digest/interfaces/IDigests'
import { DigestAPI } from '~/components/Digest/classes/DigestAPI'

export class DigestSelect implements IDigestSelect {
  prismic: PrismicPlugin
  setAllDigestsOptions: boolean
  currentOption: Ref<DigestSelectOption>
  selectDigestOptions: Ref<UnwrapRef<(false | { year: string; label: string })[]>>
  constructor(prismic: PrismicPlugin, emit: any, { setAllDigestsOptions = false }) {
    this.prismic = prismic
    this.setAllDigestsOptions = setAllDigestsOptions
    this.currentOption = ref({ label: 'Digests of the Year', year: '' })
    this.selectDigestOptions = ref([setAllDigestsOptions && { label: 'All digests', year: '' }].filter(Boolean))
  }

  createSelectOption(date: string) {
    return {
      label: `Digest of the ${ date ? dayjs(new Date(date)).year() : date || 'Year' }`,
      year: date ? (dayjs(new Date(date)).year()).toString() : date,
    }
  }

  async createSelectOptionsList () {
    const response = await new DigestAPI().getAllDigests(this.prismic)

    this.selectDigestOptions.value = [...this.selectDigestOptions.value, ...response.results.reduce((acc: DigestSelectOption[], result: Digest) => {
      if (!acc.length) {
        acc.push(this.createSelectOption(result.data.date))
      } else {
        if (acc.find((item :DigestSelectOption) => item.year === dayjs(new Date(result.data.date)).year().toString())) {
          return acc
        }
        acc.push(this.createSelectOption(result.data.date))
      }

      return acc
    }, [])]
  }
}

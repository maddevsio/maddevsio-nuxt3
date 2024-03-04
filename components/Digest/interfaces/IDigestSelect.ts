import type { Ref, UnwrapRef } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DateField } from '@prismicio/client'

export type DigestSelectDate = DateField | string | number | Date

export interface DigestSelectOption {
  label: string
  year: string
}

export interface IDigestSelect {
  prismic: PrismicPlugin
  currentOption: Ref<DigestSelectOption>
  selectDigestOptions: Ref<UnwrapRef<({ year: string; label: string })[]>>
  createSelectOption<T extends DigestSelectDate>(date: DigestSelectDate): DigestSelectOption
  createSelectOptionsList(): Promise<void>
}

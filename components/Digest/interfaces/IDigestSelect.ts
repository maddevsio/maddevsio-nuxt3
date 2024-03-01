import type { Ref, UnwrapRef } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DigestSelectOption } from '~/components/Digest/interfaces/IDigests'

export interface IDigestSelect {
  prismic: PrismicPlugin
  currentOption: Ref<DigestSelectOption>
  selectDigestOptions: Ref<UnwrapRef<({ year: string; label: string })[]>>
  createSelectOption(date: string):DigestSelectOption
  createSelectOptionsList():Promise<void>
}

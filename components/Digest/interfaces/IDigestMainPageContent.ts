import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DigestSelectOption, IDigests } from '~/components/Digest/interfaces/IDigests'
export interface IDigestMainPageContent {
  digests: IDigests
  digestTitleRef: Ref<HTMLElement | null>
  pageRef: Ref<number>
  router: Router
  route: any
  prismic: PrismicPlugin
  changePage(page: number):Promise<void>
  setTitle(currentOption: DigestSelectOption):string
}

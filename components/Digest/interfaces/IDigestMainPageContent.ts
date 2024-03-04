import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PrismicPlugin } from '@prismicio/vue'
import type { DigestSelectOption } from '~/components/Digest/interfaces/IDigestSelect'

export interface IDigestMainPageContent {
  digestTitleRef: Ref<HTMLElement | null>
  pageRef: Ref<number>
  router: Router
  route: any
  prismic: PrismicPlugin
  fetchDigests: Function
  changePage(page: number):Promise<void>
  setTitle(currentOption: DigestSelectOption):string
}

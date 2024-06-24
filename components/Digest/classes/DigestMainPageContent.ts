import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PrismicPlugin } from '@prismicio/vue'
import type { IDigestMainPageContent } from '~/components/Digest/interfaces/IDigestMainPageContent'
import type { DigestSelectOption } from '~/components/Digest/interfaces/IDigestSelect'
import type { IDigests } from '~/components/Digest/interfaces/IDigests'

export class DigestMainPageContent implements IDigestMainPageContent {
  digestTitleRef: Ref<HTMLElement & { $el: HTMLElement } | null>
  pageRef: Ref<number>
  router: Router
  route: any
  prismic: PrismicPlugin
  fetchDigests: IDigests['fetchDigests']
  pageName = 'page'
  constructor(
    router: Router,
    route: any,
    prismic: PrismicPlugin,
    fetchDigests: IDigests['fetchDigests']) {
    this.digestTitleRef = ref(null)
    this.pageRef = ref(1)
    this.router = router
    this.route = route
    this.prismic = prismic
    this.fetchDigests = fetchDigests

    this.setTitle = this.setTitle.bind(this)
  }

  setTitle(digestOption: DigestSelectOption) {
    if (!Object.keys(digestOption).length || !digestOption.year) { return 'All Monthly Digests' }
    return `Monthly digests of ${ digestOption.year }`
  }
}

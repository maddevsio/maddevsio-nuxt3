import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PrismicPlugin } from '@prismicio/vue'
import type { IDigestMainPageContent } from '~/components/Digest/interfaces/IDigestMainPageContent'
import type { DigestSelectOption, IDigests } from '~/components/Digest/interfaces/IDigests'
export class DigestMainPageContent implements IDigestMainPageContent {
  digests: IDigests
  digestTitleRef: Ref<HTMLElement | null>
  pageRef: Ref<number>
  router: Router
  route: any
  prismic: PrismicPlugin
  constructor(router: Router, route: any, prismic: PrismicPlugin, digests: IDigests) {
    this.digestTitleRef = ref(null)
    this.pageRef = ref(1)
    this.router = router
    this.route = route
    this.prismic = prismic
    this.digests = digests

    this.setTitle = this.setTitle.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  setTitle(digestOption: DigestSelectOption) {
    if (!Object.keys(digestOption).length || !digestOption.year) { return 'All Monthly Digests' }
    return `Monthly digests of ${ digestOption.year }`
  }

  async changePage (page: number) {
    this.pageRef.value = page
    await this.digests.fetchDigests({ prismic: this.prismic, year: '', filter: false, date: new Date(), page: this.pageRef.value, pageSize: 12 })
    await this.router.push({
      path: this.route.path,
      query: {
        page: this.pageRef.value,
      },
    })

    if (!this.digestTitleRef.value) { return }
    this.digestTitleRef.value.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }
}

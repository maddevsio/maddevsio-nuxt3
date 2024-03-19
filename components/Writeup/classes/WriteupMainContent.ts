import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PrismicPlugin } from '@prismicio/vue'
import type {
  TransformedWriteup,
  TransformedWriteups,
} from '~/components/Writeup/interfaces/IWriteupList'
import type { IWriteupMainContent } from '~/components/Writeup/interfaces/IWriteupMainContent'
import { Writeup } from '~/components/Writeup/classes/Writeup'
import type { ActiveTag } from '~/stores/DynamicTagCloudStore'
export class WriteupMainContent implements IWriteupMainContent {
  activeTag: ActiveTag
  writeups: Ref<TransformedWriteup[]>
  totalPages: Ref<number>
  nextPage: Ref<string | null>
  prevPage: Ref<string | null>
  writeupListRef: Ref<any>
  currentPage: Ref<number>
  pageSize: number
  prismic: PrismicPlugin
  router: Router
  route: any
  ffEnvironment: string

  constructor(
    writeupsData: TransformedWriteups,
    prismic: PrismicPlugin,
    router: Router,
    route: any,
    activeTagObj: ActiveTag,
    ffEnvironment: string,
  ) {
    this.activeTag = activeTagObj
    this.writeups = ref(writeupsData.writeupList)
    this.totalPages = ref(writeupsData.totalPages)
    this.nextPage = ref(writeupsData.nextPage)
    this.prevPage = ref(writeupsData.prevPage)
    this.writeupListRef = ref(null)
    this.currentPage = ref(1)
    this.pageSize = 5
    this.prismic = prismic
    this.router = router
    this.route = route
    this.ffEnvironment = ffEnvironment

    this.getWriteups = this.getWriteups.bind(this)
    this.changePage = this.changePage.bind(this)
    this.scrollToStart = this.scrollToStart.bind(this)
  }

  async getWriteups(page: number, tags: string[]) {
    const writeupData = await new Writeup(this.ffEnvironment).getWriteupsByTags(this.prismic, tags, this.pageSize, page)
    if (writeupData) {
      this.totalPages.value = writeupData.totalPages
      this.nextPage.value = writeupData.nextPage
      this.prevPage.value = writeupData.prevPage
      this.writeups.value = writeupData.writeupList
    }
  }

  scrollToStart () {
    if (this.writeupListRef.value) {
      this.writeupListRef.value.$el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }

  async changePage(page: number) {
    this.currentPage.value = page
    if ('tag' in this.route.query && !('page' in this.route.query)) {
      if (this.currentPage.value !== 1) {
        await this.router.push({
          path: this.route.path,
          query: {
            tag: this.route.query.tag || this.activeTag?.writeUps,
            page: this.currentPage.value,
          },
        })
        this.scrollToStart()
      }
    }

    if ('tag' in this.route.query && 'page' in this.route.query) {
      await this.router.push({
        path: this.route.path,
        query: {
          tag: this.route.query.tag || this.activeTag?.writeUps,
          page: this.currentPage.value,
        },
      })
      this.scrollToStart()
    }

    if (!('tag' in this.route.query)) {
      await this.router.push({
        path: this.route.path,
        query: {
          page: this.currentPage.value,
        },
      })
      this.scrollToStart()
    }

    const tagsFromRoute = this.route.query.tag === 'All Write-ups' ? ['Writeup'] : [this.route.query.tag]
    if (tagsFromRoute.length && tagsFromRoute.every(tag => tag)) {
      await this.getWriteups(this.currentPage.value, tagsFromRoute)
    } else {
      await this.getWriteups(this.currentPage.value, ['Writeup' || this.activeTag?.writeUps])
    }
  }
}

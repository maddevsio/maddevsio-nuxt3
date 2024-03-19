import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PrismicPlugin } from '@prismicio/vue'
import type { IWriteupList, WriteupListProps, TransformedWriteup } from '~/components/Writeup/interfaces/IWriteupList'
import { Writeup } from '~/components/Writeup/classes/Writeup'

export class WriteupList implements IWriteupList {
  sliceBackgroundColor: string
  tags: string[]
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

  constructor(props: WriteupListProps, prismic: PrismicPlugin, router: Router, route: any, ffEnvironment: string) {
    this.sliceBackgroundColor = props.primary.backgroundColor || 'white'
    this.tags = props?.items.filter(item => item.writeupTag).map(item => item.writeupTag)
    this.writeups = ref([])
    this.totalPages = ref(0)
    this.nextPage = ref(null)
    this.prevPage = ref(null)
    this.writeupListRef = ref(null)
    this.currentPage = ref(1)
    this.pageSize = 5
    this.prismic = prismic
    this.router = router
    this.route = route
    this.ffEnvironment = ffEnvironment

    this.getWriteups = this.getWriteups.bind(this)
    this.changePage = this.changePage.bind(this)

    markRaw(this)
  }

  async getWriteups(page: number) {
    if (!this.tags.length) { return }
    const writeupData = await new Writeup(this.ffEnvironment).getWriteupsByTags(this.prismic, this.tags, this.pageSize, page)
    if (writeupData) {
      this.totalPages.value = writeupData.totalPages
      this.nextPage.value = writeupData.nextPage
      this.prevPage.value = writeupData.prevPage
      this.writeups.value = writeupData.writeupList
    }
  }

  async changePage(page: number) {
    this.currentPage.value = page
    await this.getWriteups(this.currentPage.value)

    await this.router.push({
      path: this.route.path,
      query: {
        writeupPage: this.currentPage.value,
      },
    })

    if (!this.writeupListRef.value?.$el) { return }
    this.writeupListRef.value.$el.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }
}

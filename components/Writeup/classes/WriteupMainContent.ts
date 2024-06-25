import type { Ref } from 'vue'
import type { PrismicPlugin } from '@prismicio/vue'
import type {
  TransformedWriteup,
  TransformedWriteups,
} from '~/components/Writeup/interfaces/IWriteupList'
import type { IWriteupMainContent } from '~/components/Writeup/interfaces/IWriteupMainContent'
import { Writeup } from '~/components/Writeup/classes/Writeup'

export class WriteupMainContent implements IWriteupMainContent {
  writeups: Ref<TransformedWriteup[]>
  totalPages: Ref<number>
  nextPage: Ref<string | null>
  prevPage: Ref<string | null>
  currentPage: Ref<number>
  pageSize: number
  prismic: PrismicPlugin
  ffEnvironment: string
  pageName = 'page'
  mainTagForQuery = 'Writeup'
  mainTagName = 'All Write-ups'
  firstPage = 1
  extraIndentFromHeader = 65

  constructor(
    writeupsData: TransformedWriteups,
    prismic: PrismicPlugin,
    ffEnvironment: string,
  ) {
    this.writeups = ref(writeupsData.writeupList)
    this.totalPages = ref(writeupsData.totalPages)
    this.nextPage = ref(writeupsData.nextPage)
    this.prevPage = ref(writeupsData.prevPage)
    this.currentPage = ref(1)
    this.pageSize = 5
    this.prismic = prismic
    this.ffEnvironment = ffEnvironment

    this.getWriteups = this.getWriteups.bind(this)
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
}

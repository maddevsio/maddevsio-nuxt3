import type { Ref } from 'vue'
import type {
  IPostTableOfContents,
  PostTableOfContentsProps,
} from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { TableOfContent } from '~/interfaces/common/commonInterfaces'
import { PostTableOfContentsItem } from '~/components/Blog/classes/Post/PostTableOfContentsItem'

export class PostTableOfContents implements IPostTableOfContents {
  servicePost: boolean
  tableOfContents: TableOfContent
  activeAnchor: Ref<string>
  scrollBar: Ref<any>
  isVisibleContent: Ref<boolean>
  sections: Ref<NodeListOf<Element> | any[]>
  timeoutId: Ref<ReturnType<typeof setTimeout> | undefined>
  anchorsRef: Ref<any>
  anchors: any[]
  colorTheme: string
  textColorClass: string

  constructor({
    tableOfContents,
    servicePost,
  }: PostTableOfContentsProps) {
    this.servicePost = servicePost
    this.tableOfContents = tableOfContents
    this.activeAnchor = ref('')
    this.scrollBar = ref(null)
    this.isVisibleContent = ref(!servicePost)
    this.sections = ref([])
    this.timeoutId = ref()
    this.anchorsRef = ref(null)
    this.anchors = this.createAnchors()
    this.colorTheme = tableOfContents?.primary?.color_theme || 'white'
    this.textColorClass = this.colorTheme === 'black' ? 'text-color--white' : 'text-color--black'

    this.showContent = this.showContent.bind(this)
    this.intersectionHandler = this.intersectionHandler.bind(this)
    this.getSimpleBarScrollElement = this.getSimpleBarScrollElement.bind(this)
  }

  createAnchors() {
    if (!this.tableOfContents) { return [] }
    return this.tableOfContents.items
      .filter(item => item.lable.length)
      .map((tableOfContent, tableOfContentIndex) => new PostTableOfContentsItem({
        activeLink: this.activeAnchor,
        // @ts-ignore
        link: tableOfContent.lable.length ? `#${ createAnchorID(tableOfContent.lable[0].text) }` : '',
        // @ts-ignore
        label: tableOfContent.lable[0].text,
        index: tableOfContentIndex,
        colorTheme: this.tableOfContents?.primary?.color_theme,
      }))
  }

  scrollSimpleBar() {
    const link = document.querySelector(`[data-id="${ this.activeAnchor.value }"]`) as HTMLLinkElement
    if (link && this.scrollBar.value) {
      this.scrollBar.value.scrollTo({
        top: link.offsetTop,
      })
    }
  }

  intersectionHandler(activeAnchor: string) {
    if (this.anchors.some(a => a.link === `#${ activeAnchor }`)) {
      this.activeAnchor.value = `#${ activeAnchor }`
      this.scrollSimpleBar()
    }
  }

  showContent() {
    if (this.servicePost) {
      this.isVisibleContent.value = !this.isVisibleContent.value
    }
  }

  getSimpleBarScrollElement() {
    if (this.anchorsRef.value && this.anchorsRef.value.SimpleBar) {
      this.scrollBar.value = this.anchorsRef.value.SimpleBar.getScrollElement()
    }
  }
}

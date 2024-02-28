import type { Ref } from 'vue'
import type { TableOfContent } from '~/interfaces/common/commonInterfaces'
import type { IPostTableOfContentsItem } from '~/components/Blog/interfaces/Post/IPostTableOfContentsItem'

export interface PostTableOfContentsProps {
  tableOfContents: TableOfContent
  servicePost: boolean
}

export interface IPostTableOfContents {
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
  createAnchors(): IPostTableOfContentsItem[]
  scrollSimpleBar(): void
  intersectionHandler(activeAnchor: string): void
  showContent(): void
  getSimpleBarScrollElement(): void
}

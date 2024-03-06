import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'
import type { TableOfContent } from '~/interfaces/common/commonInterfaces'

export interface DigestPostSidebarProps {
  tableOfContents: TableOfContent
  openGraphUrl: string
  metaTitle: string
}

export interface IDigestPostSidebar {
  postTableOfContentsInstance: IPostTableOfContents
  subscribeFormBlock: ISubscribeFormBlock
  openGraphUrl: string
  metaTitle: string
}

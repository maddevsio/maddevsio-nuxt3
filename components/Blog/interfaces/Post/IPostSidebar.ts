import type { Ref } from 'vue'
import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'

export interface PostSidebarProps {
  tableOfContents: any
  openGraphUrl: string
  metaTitle: string
  servicePost: boolean
  postForm?: any
  mobilePoint?: number
}

export interface IPostSidebar {
  postTableOfContentsInstance: IPostTableOfContents
  openGraphUrl: string
  metaTitle: string
  servicePost: boolean
  postForm: any
  mobilePoint: number
  indentFromHeader: number
  postRated: Ref<boolean>
  showSubscribeFormTimer: Ref<ReturnType<typeof setTimeout> | undefined>
  subscribeFormBlock: ISubscribeFormBlock
  showSubscribeForm(): void
}

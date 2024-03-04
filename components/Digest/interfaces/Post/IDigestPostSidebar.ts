import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'

export interface IDigestPostSidebar {
  postTableOfContentsInstance: IPostTableOfContents
  subscribeFormBlock: ISubscribeFormBlock
}

import type { IDigestPostSidebar } from '~/components/Digest/interfaces/Post/IDigestPostSidebar'
import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { ISubscribeFormBlock } from '~/components/Widgets/Form/interfaces/forms/ISubscribeFormBlock'
import { PostTableOfContents } from '~/components/Blog/classes/Post/PostTableOfContents'
import { SubscribeFormBlock } from '~/components/Widgets/Form/classes/forms/SubscribeFormBlock'

export class DigestPostSidebar implements IDigestPostSidebar {
  postTableOfContentsInstance: IPostTableOfContents
  subscribeFormBlock: ISubscribeFormBlock

  constructor(tableOfContents: IPostTableOfContents) {
    this.postTableOfContentsInstance = new PostTableOfContents(tableOfContents)
    this.subscribeFormBlock = new SubscribeFormBlock(
      {
        colorTheme: 'white',
        options: {
          formLocation: 'Table Of Content',
          lineBreakForLink: true,
          showButton: true,
          showBackgroundImage: true,
        },
      })
  }
}

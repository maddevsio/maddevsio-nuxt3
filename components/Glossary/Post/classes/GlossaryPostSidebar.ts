import { PostTableOfContents } from '~/components/Blog/classes/Post/PostTableOfContents'
import type { TableOfContent } from '~/interfaces/common/commonInterfaces'
import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'
import type { IGlossaryPostSidebar } from '~/components/Glossary/Post/interfaces/IGlossaryPostSidebar'

export class GlossaryPostSidebar implements IGlossaryPostSidebar {
  indentFromHeader = 31
  initialHeaderHeight = 66
  postTableOfContentsInstance: IPostTableOfContents
  constructor(tableOfContents: TableOfContent) {
    this.postTableOfContentsInstance = new PostTableOfContents({ tableOfContents, servicePost: false })
  }
}

import type { IGlossaryPostSidebar } from '~/components/Glossary/Post/interfaces/IGlossaryPostSidebar'
import type { IGlossaryPostHead } from '~/components/Glossary/Post/interfaces/IGlossaryPostHead'
import type { IGlossaryPostFooter } from '~/components/Glossary/Post/interfaces/IGlossaryPostFooter'
import type { TransformedGlossaryPost } from '~/interfaces/common/commonInterfaces'
import { GlossaryPostSidebar } from '~/components/Glossary/Post/classes/GlossaryPostSidebar'
import { GlossaryPostHead } from '~/components/Glossary/Post/classes/GlossaryPostHead'
import type { IGlossaryPostView } from '~/components/Glossary/Post/interfaces/IGlossaryPostView'
import { GlossaryPostFooter } from '~/components/Glossary/Post/classes/GlossaryPostFooter'

export class GlossaryPostView implements IGlossaryPostView {
  glossaryPostSidebar: IGlossaryPostSidebar
  glossaryPostHead: IGlossaryPostHead
  glossaryPostComponents: object[]
  glossaryPostFooter: IGlossaryPostFooter

  constructor(glossaryPost: TransformedGlossaryPost) {
    this.glossaryPostSidebar = new GlossaryPostSidebar(glossaryPost?.tableOfContents)
    this.glossaryPostHead = new GlossaryPostHead(glossaryPost.wordPageTitle, glossaryPost.wordPageDescription)
    this.glossaryPostComponents = glossaryPost.slices
    this.glossaryPostFooter = new GlossaryPostFooter({
      author: glossaryPost?.author,
      coAuthor: glossaryPost?.coAuthor,
      updatedDate: glossaryPost?.updatedDate,
    })
  }
}

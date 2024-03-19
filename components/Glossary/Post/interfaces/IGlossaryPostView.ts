import type { IGlossaryPostSidebar } from '~/components/Glossary/Post/interfaces/IGlossaryPostSidebar'
import type { IGlossaryPostHead } from '~/components/Glossary/Post/interfaces/IGlossaryPostHead'
import type { IGlossaryPostFooter } from '~/components/Glossary/Post/interfaces/IGlossaryPostFooter'
export interface IGlossaryPostView {
  glossaryPostSidebar: IGlossaryPostSidebar
  glossaryPostHead: IGlossaryPostHead
  glossaryPostComponents: object[]
  glossaryPostFooter: IGlossaryPostFooter
}

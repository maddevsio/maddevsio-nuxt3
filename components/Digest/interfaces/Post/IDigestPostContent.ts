import type { IDigestPostSidebar } from '~/components/Digest/interfaces/Post/IDigestPostSidebar'
import type { IPostTableOfContents } from '~/components/Blog/interfaces/Post/IPostTableOfContents'

export interface DigestPostContentProps {
  tableOfContents: IPostTableOfContents
  slices: any[]
}

export interface IDigestPostContent {
  digestPostSidebar: IDigestPostSidebar
  slices: any[]
}

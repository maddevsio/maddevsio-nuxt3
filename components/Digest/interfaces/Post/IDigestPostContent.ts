import type { IDigestPostSidebar } from '~/components/Digest/interfaces/Post/IDigestPostSidebar'
import type { TableOfContent } from '~/interfaces/common/commonInterfaces'

export interface DigestPostContentProps {
  openGraphUrl: string
  metaTitle: string
  tableOfContents: TableOfContent
  slices: any[]
}

export interface IDigestPostContent {
  digestPostSidebar: IDigestPostSidebar
  slices: any[]
}

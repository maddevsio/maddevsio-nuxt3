import type {
  DigestPostContentProps,
  IDigestPostContent,
} from '~/components/Digest/interfaces/Post/IDigestPostContent'
import type { IDigestPostSidebar } from '~/components/Digest/interfaces/Post/IDigestPostSidebar'
import { DigestPostSidebar } from '~/components/Digest/classes/Post/DigestPostSidebar'

export class DigestPostContent implements IDigestPostContent {
  digestPostSidebar: IDigestPostSidebar
  slices: any[]

  constructor(
    {
      slices,
      tableOfContents,
      metaTitle,
      openGraphUrl,
    }: DigestPostContentProps) {
    this.digestPostSidebar = new DigestPostSidebar({ tableOfContents, metaTitle, openGraphUrl })
    this.slices = slices
  }
}

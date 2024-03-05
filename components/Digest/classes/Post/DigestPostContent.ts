import type {
  DigestPostContentProps,
  IDigestPostContent,
} from '~/components/Digest/interfaces/Post/IDigestPostContent'
import type { IDigestPostSidebar } from '~/components/Digest/interfaces/Post/IDigestPostSidebar'
import { DigestPostSidebar } from '~/components/Digest/classes/Post/DigestPostSidebar'

export class DigestPostContent implements IDigestPostContent {
  digestPostSidebar: IDigestPostSidebar
  slices: any[]

  constructor({ slices, tableOfContents }: DigestPostContentProps) {
    this.digestPostSidebar = new DigestPostSidebar(tableOfContents)
    this.slices = slices
  }
}

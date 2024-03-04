import type { IDigestPostHeader } from '~/components/Digest/interfaces/Post/IDigestPostHeader'
import type { IDigestPostContent } from '~/components/Digest/interfaces/Post/IDigestPostContent'
import type { IDigestPostFooter } from '~/components/Digest/interfaces/Post/IDigestPostFooter'

export interface IDigestPostComponents {
  digestPostHeader: IDigestPostHeader
  digestPostContent: IDigestPostContent
  digestPostFooter: IDigestPostFooter
}
export interface IDigestPostView {
  postComponents: IDigestPostComponents
}

import type { DigestPostComponents, IDigestPostView } from '~/components/Digest/interfaces/Post/IDigestPostView'

export class DigestPostView implements IDigestPostView {
  postComponents: DigestPostComponents

  constructor(postComponents: DigestPostComponents) {
    this.postComponents = postComponents
  }
}

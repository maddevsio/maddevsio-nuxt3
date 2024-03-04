import type { IDigests } from '~/components/Digest/interfaces/IDigests'

export interface IDigestPostFooter {
  uid: string
  date: Date
  digests: IDigests
}

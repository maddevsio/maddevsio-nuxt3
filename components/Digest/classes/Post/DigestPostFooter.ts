import type { IDigests, IDigestsProps } from '~/components/Digest/interfaces/IDigests'
import { Digests } from '~/components/Digest/classes/Digests'

export class DigestPostFooter {
  uid: string
  date: Date

  constructor({ uid, date }: IDigestsProps) {
    this.uid = uid
    this.date = date
  }
}

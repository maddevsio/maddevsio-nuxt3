import type { IDigestsProps } from '~/components/Digest/interfaces/IDigests'
export class DigestPostFooter {
  uid: string
  date: Date

  constructor({ uid, date }: IDigestsProps) {
    this.uid = uid
    this.date = date
  }
}

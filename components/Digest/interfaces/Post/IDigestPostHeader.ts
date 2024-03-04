import type { ImageField, RichTextField } from '@prismicio/types'
import type { ComputedRef } from 'vue'
import type { Digest } from '~/components/Digest/interfaces/IDigests'

export interface IDigestPostHeader {
  uid: string
  title: RichTextField
  subtitle: RichTextField
  featuredImage: ImageField
  digestsList: Digest[]
  currentPostIndex: ComputedRef<number>
  nextDigestUrl: ComputedRef<string>
  prevDigestUrl: ComputedRef<string>
  getDigestUrl(direction: number):string
}

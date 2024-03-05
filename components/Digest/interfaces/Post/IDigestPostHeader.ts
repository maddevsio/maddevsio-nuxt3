import type { ImageField, RichTextField } from '@prismicio/types'
import type { ComputedRef } from 'vue'

export interface DigestPostHeaderProps {
  uid: string
  title: RichTextField
  subtitle: RichTextField
  featuredImage: ImageField
  digestsList: string[]
}

export interface IDigestPostHeader extends DigestPostHeaderProps {
  currentPostIndex: ComputedRef<number>
  nextDigestUrl: ComputedRef<string>
  prevDigestUrl: ComputedRef<string>
  getDigestUrl(direction: number): string
}

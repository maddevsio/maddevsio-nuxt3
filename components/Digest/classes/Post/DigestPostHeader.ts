import type { ImageField, RichTextField } from '@prismicio/types'
import type { ComputedRef } from 'vue'
import type {
  DigestPostHeaderProps,
  IDigestPostHeader,
} from '~/components/Digest/interfaces/Post/IDigestPostHeader'

export class DigestPostHeader implements IDigestPostHeader {
  uid: string
  title: RichTextField
  subtitle: RichTextField
  featuredImage: ImageField
  digestsList: string[]
  currentPostIndex: ComputedRef<number>
  nextDigestUrl: ComputedRef<string>
  prevDigestUrl: ComputedRef<string>

  constructor({ uid, title, subtitle, featuredImage, digestsList }: DigestPostHeaderProps) {
    this.uid = uid
    this.title = title
    this.subtitle = subtitle
    this.featuredImage = featuredImage
    this.digestsList = digestsList
    this.currentPostIndex = computed(() => this.digestsList.indexOf(this.uid))
    this.nextDigestUrl = computed(() => this.getDigestUrl(+1))
    this.prevDigestUrl = computed(() => this.getDigestUrl(-1))
  }

  getDigestUrl (direction: number) {
    const index = this.currentPostIndex.value + direction
    return this.uid && index >= 0 && index < this.digestsList.length
      ? `/digest/${ this.digestsList[index] }/`
      : '#'
  }
}

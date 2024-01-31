import type { Ref } from 'vue'
import type { LinkField, ImageField, RichTextField } from '@prismicio/types'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export interface EnjiProps {
  primary: {
    mainTitle: string
    mainDescription: string
    enjiDescription: string
    linkText: string
    link: LinkField
    buttonText: string
    buttonLink: LinkField
    image: ImageField
  }
}

export interface IEnji {
  intersectionOptions: {
    threshold: number
  }
  mainTitle: string | string[]
  mainDescription: string | string[]
  enjiDescription: RichTextField
  linkText: string
  link: string
  buttonText: string
  buttonLink: string
  image: ImageField
  enjiSectionRef: Ref<HTMLElement | null>
  observer: Ref<IntersectionObserverInstance | null>
  // horizontalAnchorActiveGlobal
  initIntersectionObserverForSections(): void
}

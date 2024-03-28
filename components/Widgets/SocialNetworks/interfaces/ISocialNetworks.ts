import type { FilledLinkToWebField } from '@prismicio/types'
import type { ImageField } from '@prismicio/client'

export interface SocialNetwork {
  link: FilledLinkToWebField
  icon: ImageField
}

export interface ISocialNetworks {
  items: SocialNetwork[]
}

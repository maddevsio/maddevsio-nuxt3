import type { FilledLinkToWebField } from '@prismicio/types'
import type { ImageField } from '@prismicio/client'

export interface FooterSocialNetwork {
  link: FilledLinkToWebField
  icon: ImageField
}

export interface ISocialNetworks {
  socialNetworks: FooterSocialNetwork[]
}

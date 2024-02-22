import type { FooterSocialNetwork, ISocialNetworks } from '~/components/Widgets/Footer/interfaces/ISocialNetworks'

export class SocialNetworks implements ISocialNetworks {
  socialNetworks: FooterSocialNetwork[]

  constructor(socialNetworks: FooterSocialNetwork[]) {
    this.socialNetworks = socialNetworks
  }
}

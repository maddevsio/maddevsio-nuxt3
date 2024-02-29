import type {
  ISocialNetworks,
  SocialNetwork,
} from '~/components/Widgets/SocialNetworks/interfaces/ISocialNetworks'

export class SocialNetworks implements ISocialNetworks {
  items: SocialNetwork[]

  constructor(socialNetworks: SocialNetwork[]) {
    this.items = socialNetworks
  }
}

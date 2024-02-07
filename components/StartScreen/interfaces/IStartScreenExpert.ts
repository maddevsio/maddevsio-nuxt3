import type { Ref } from 'vue'
import type { Author, AuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

export interface StartScreenExpertProps {
  primary: {
    author: Author
    description: string
    btnText: string
  }
}

export interface IVCard {
  firstName: string
  lastName: string
  phoneNumber: string
  position: string
  company: string
  email: string
  location: string
  socialNetworks: {}
}

export interface IStartScreenExpert {
  authorData: Author['data']
  position: string
  description: string
  btnText: string
  imageUrl: string
  imageAlt: string
  location: string
  socialNetworksObj: Ref<{[key: string]: string}>
  socialNetworksList: Ref<AuthorSocialNetwork[]>
  vcardData: IVCard
  generateSocialNetworks(): void
}

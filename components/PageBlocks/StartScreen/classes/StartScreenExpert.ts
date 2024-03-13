import type { Ref } from 'vue'
import type {
  IStartScreenExpert,
  IVCard,
  StartScreenExpertProps,
} from '~/components/PageBlocks/StartScreen/interfaces/IStartScreenExpert'
import type { Author, AuthorSocialNetwork } from '~/interfaces/common/commonInterfaces'

export class StartScreenExpert implements IStartScreenExpert {
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

  constructor(props: StartScreenExpertProps) {
    this.authorData = props.primary.author.data
    this.position = this.authorData.position
    this.description = props.primary.description
    this.btnText = props.primary.btnText || 'save contact'
    this.imageUrl = this.authorData.image.header.url!
    this.imageAlt = this.authorData.image.header.alt! || `${ this.authorData.firstName } ${ this.authorData.lastName }`
    this.location = this.authorData?.location || ''

    this.socialNetworksObj = ref<{[key: string]: string}>({})
    this.socialNetworksList = ref<AuthorSocialNetwork[]>([])

    this.vcardData = reactive({
      firstName: this.authorData.firstName || '',
      lastName: this.authorData.lastName || '',
      phoneNumber: this.authorData.phoneNumber || '',
      position: this.authorData.position || '',
      company: this.authorData.company || '',
      email: this.authorData.email || '',
      location: this.authorData.location || '',
      socialNetworks: this.socialNetworksObj.value,
    })

    this.generateSocialNetworks = this.generateSocialNetworks.bind(this)
  }

  generateSocialNetworks() {
    if (this.authorData.social_networks && Array.isArray(this.authorData.social_networks)) {
      this.authorData.social_networks.forEach(item => {
        if (item.network && item.link && item.link.url) {
          this.socialNetworksObj.value[item.network] = item.link.url
          this.socialNetworksList.value.push(item)
        }
      })
    }
  }
}

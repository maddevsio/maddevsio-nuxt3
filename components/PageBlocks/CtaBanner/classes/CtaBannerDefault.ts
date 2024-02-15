import type { FilledLinkToWebField, ImageField } from '@prismicio/types'
import type { Ref } from 'vue'
import type {
  CtaBannerDefaultProps,
  ICtaBannerDefault,
} from '~/components/PageBlocks/CtaBanner/interfaces/ICtaBannerDefault'

export class CtaBannerDefault implements ICtaBannerDefault {
  fullName: string
  title: string
  description: string
  image: ImageField
  position: string
  buttonLink: FilledLinkToWebField
  buttonText: string
  modalType: string
  modalContactMeRef: Ref<{ show(): void } | null>

  constructor(props: CtaBannerDefaultProps) {
    this.fullName = props.primary.name || ''
    this.title = props.primary.title || ''
    this.description = props.primary.description || ''
    this.image = props.primary.image
    this.position = props.primary.position || ''
    this.buttonLink = props.primary.btnLink
    this.buttonText = props.primary.btnText || ''
    this.modalType = props.primary.modal || 'order-project'
    this.modalContactMeRef = ref(null)

    this.showModal = this.showModal.bind(this)
    this.sendCareersLinkClickEvent = this.sendCareersLinkClickEvent.bind(this)
  }

  showModal() {
    if (!this.modalContactMeRef?.value?.show) { return }
    this.modalContactMeRef?.value?.show()
    // contactMeClickEvent.send(`CTA Banner in ${route.value.path} page`)
  }

  sendCareersLinkClickEvent(route: any) {
    console.log(route)
    // if (this.buttonLink?.url?.includes('/careers/')) { careersClickEvent.send(`Click from ${ route.path } page`) }
  }
}

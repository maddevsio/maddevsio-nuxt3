import type { FilledLinkToWebField, ImageField } from '@prismicio/types'
import type { Ref } from 'vue'

export interface CtaBannerDefaultProps {
  primary: {
    name: string
    title: string
    description: string
    image: ImageField
    position: string
    btnLink: FilledLinkToWebField
    btnText: string
    modal: string
  }
}

export interface ICtaBannerDefault {
  fullName: string
  title: string
  description: string
  image: ImageField
  position: string
  buttonLink: FilledLinkToWebField
  buttonText: string
  modalType: string
  modalContactMeRef: Ref<{ show(): void } | null>
  isShowModal: Ref<boolean>
  showModal(route: any): void
  sendCareersLinkClickEvent(route: any): void
}

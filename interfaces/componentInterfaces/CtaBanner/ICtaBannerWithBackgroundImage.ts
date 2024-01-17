import type { Ref, VNodeRef } from 'vue'

export interface ICtaBannerWithBackgroundImage {
  title: string | string[]
  titleTag: string
  description: string | string[]
  showButton: boolean
  buttonText: string
  backgroundImage: {
    url: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
  backgroundColor: string | null
  enableImageOverlay: boolean
  linkToPage: {
    ourDomain: boolean
    url: string
  }
  modalContactMeRef: Ref<VNodeRef | null>
  showModal(): void
}

export interface CtaBannerWithBackgroundImageProps {
  primary: {
    title: string
    titleTag: string
    description: string
    showButton: boolean
    buttonText: string
    backgroundImage: {
      url: string
      alt: string
      dimensions: {
        width: number
        height: number
      }
    }
    backgroundColor: string | null
    enableImageOverlay: boolean
    linkToPage: {
      url: string
    }
  }
}

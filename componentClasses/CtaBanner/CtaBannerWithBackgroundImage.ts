import type { VNodeRef } from 'vue'
import type {
  CtaBannerWithBackgroundImageProps,
  ICtaBannerWithBackgroundImage,
} from '~/interfaces/componentInterfaces/CtaBanner/ICtaBannerWithBackgroundImage'
import { transformLineSeparator } from '~/utils/transformLineSeparator'

export class CtaBannerWithBackgroundImage implements ICtaBannerWithBackgroundImage {
  title
  titleTag
  description
  showButton
  buttonText
  backgroundImage
  backgroundColor
  enableImageOverlay
  linkToPage
  modalContactMeRef
  constructor(props: CtaBannerWithBackgroundImageProps) {
    this.title = transformLineSeparator(props.primary.title, 'string') || ''
    this.titleTag = props.primary.titleTag || 'h2'
    this.description = transformLineSeparator(props.primary.description, 'string') || ''
    this.showButton = props.primary.showButton === null ? true : props.primary.showButton
    this.buttonText = props.primary.buttonText || 'Contact us'
    this.backgroundImage = props.primary.backgroundImage || {
      url: '',
      alt: '',
      dimensions: {
        width: 0,
        height: 0,
      },
    }

    this.backgroundColor = setSliceBackground(props.primary.backgroundColor || 'black')
    this.enableImageOverlay = props.primary.enableImageOverlay === null ? true : props.primary.enableImageOverlay
    this.linkToPage = props.primary.linkToPage.url ? checkAndExtractDomain(props.primary.linkToPage.url) : { ourDomain: false, url: '' }

    this.modalContactMeRef = ref<VNodeRef | null>(null)

    this.showModal = this.showModal.bind(this)

    markRaw(this)
  }

  showModal() {
    if (!this.modalContactMeRef.value?.show) { return }
    this.modalContactMeRef.value.show()
    // contactMeClickEvent.send('CTA Banner with background image component')
  }
}

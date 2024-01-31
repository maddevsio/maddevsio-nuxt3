import type { ImageField, RichTextField } from '@prismicio/types'
import type { Ref } from 'vue'
import type { EnjiProps, IEnji } from '~/components/Enji/interfaces/IEnji'
import type { IntersectionObserverInstance } from '~/interfaces/common/commonInterfaces'

export class Enji implements IEnji {
  intersectionOptions = {
    threshold: 0.4,
  }

  mainTitle: string | string[]
  mainDescription: string | string[]
  enjiDescription: RichTextField
  linkText: string
  link: string
  buttonText: string
  buttonLink: string
  image: ImageField
  enjiSectionRef: Ref<HTMLElement | null>
  observer: Ref<IntersectionObserverInstance | null>
  constructor(props: EnjiProps) {
    this.mainTitle = reformatToHtml(props.primary.mainTitle, 'string') || ''
    this.mainDescription = reformatToHtml(props.primary.mainDescription, 'string') || ''
    this.enjiDescription = props.primary.enjiDescription
    this.linkText = props.primary.linkText || 'We provide Enji.ai to our clients for FREE'
    this.link = props.primary.link?.url || ''
    this.buttonText = props.primary.buttonText || 'Learn More'
    this.buttonLink = props.primary.buttonLink?.url || ''
    this.image = props.primary.image || {}
    this.enjiSectionRef = ref(null)
    this.observer = ref(null)
  }

  initIntersectionObserverForSections(updateActiveAnchor: (anchor: string) => void) {
    this.observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveAnchor(entry.target.id)
        }
      })
    }, this.intersectionOptions)
    this.observer.value.observe(this.enjiSectionRef.value)
  }
}

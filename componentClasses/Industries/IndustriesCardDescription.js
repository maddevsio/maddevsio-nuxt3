import { computed, markRaw } from '@nuxtjs/composition-api'
import {
  IIndustriesCardDescription,
} from '@/services/prismic/components/interfaces/Industries/IIndustriesCardDescription'
import { useColorConverterToClass } from '@/services/prismic/utils/useColorConverterToClass'

export class IndustriesCardDescription extends IIndustriesCardDescription {
  constructor(props) {
    super()
    this.cards = computed(() => props.items.map(card => ({
      ...card,
      cardBackgroundColor: useColorConverterToClass('bg', props.primary?.colorTheme || 'white'),
      cardTextColor: useColorConverterToClass('text', props.primary?.colorTheme === 'white' ? 'black' : 'white'),
    })))
    this.colorTheme = props.primary.colorTheme || 'white'
    this.sliceBackground = useColorConverterToClass('slice-bg', props.primary.colorTheme || 'white')

    this.goToPage = this.goToPage.bind(this)

    markRaw(this)
  }

  getComponentName() {
    return this.componentName
  }

  goToPage = (url, router) => {
    if (!url) { return }
    router.push(url)
  }
}

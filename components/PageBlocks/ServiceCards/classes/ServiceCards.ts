import type { Ref } from 'vue'
import type { AnimationItem } from 'lottie-web'
import type {
  IServiceCards, ServiceCardsProps,
  ServiceLottieAnim,
  TransformedServiceCard,
} from '~/components/PageBlocks/ServiceCards/interfaces/IServiceCards'

export class ServiceCards implements IServiceCards {
  cards: TransformedServiceCard[]
  lottieAnimations: Ref<ServiceLottieAnim[] | undefined>
  animationName: Ref<string>
  backgroundColor: string

  constructor(props: ServiceCardsProps) {
    this.cards = props.items.map(card => ({
      ...card,
      id: card.title?.toLowerCase().split(' ').join('-'),
      title: card.title?.replace(/\n/g, '<br />'),
      titleTag: card.titleTag || 'h3',
      textColor: colorConverterToClass('text', props.primary.backgroundColor === 'white' && card.cardBackground === 'white' ? 'black' : 'white'),
      cardBackgroundColor: colorConverterToClass('bg', card.cardBackground || 'black'),
    }))
    this.lottieAnimations = ref([])
    this.animationName = ref('')
    this.backgroundColor = colorConverterToClass('slice-bg', props.primary.backgroundColor || 'black')

    this.animHandler = this.animHandler.bind(this)
    this.onHoverCard = this.onHoverCard.bind(this)
    this.onUnHoverCard = this.onUnHoverCard.bind(this)
  }

  animHandler(anim: AnimationItem) {
    if ('fileName' in anim) {
      this.lottieAnimations.value!.push({
        id: anim?.fileName as string,
        anim,
      })
    }
  }

  onHoverCard(cardIconName: string) {
    this.animationName.value = cardIconName.split('.').slice(0, 1).join('')
    this.lottieAnimations.value!.forEach(lottie => {
      if (lottie.id === this.animationName.value && lottie.anim.playSegments) {
        lottie.anim.playSegments([
          lottie.anim.firstFrame,
          lottie.anim.totalFrames,
        ])
      }
    })
  }

  onUnHoverCard() {
    this.animationName.value = ''
  }
}

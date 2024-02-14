import type { AnimationItem } from 'lottie-web'
import type { Ref } from 'vue'

export interface ServiceCard {
  iconName: string
  titleTag: string
  title: string
  textColor: string
  description: string
  cardBackground: string
}

export interface TransformedServiceCard extends ServiceCard {
  id: string
  cardBackgroundColor: string
}

export interface ServiceCardsProps {
  primary: {
    backgroundColor: string
  }
  items: ServiceCard[]
}

export interface ServiceLottieAnim {
  id: string
  anim: AnimationItem
}

export interface IServiceCards {
  cards: TransformedServiceCard[]
  lottieAnimations: Ref<ServiceLottieAnim[] | undefined>
  animationName: Ref<string>
  backgroundColor: string
  animHandler(anim: AnimationItem): void
  onHoverCard(cardIconName: string): void
  onUnHoverCard(): void
}

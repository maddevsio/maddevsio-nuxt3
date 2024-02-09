import type { Ref } from 'vue'
import type {
  CustomerLogoInteractiveCardsProps,
  ICard, ICustomerLogoInteractiveCard,
  ICustomerLogoInteractiveCards,
} from '~/components/CustomerLogo/interfaces/ICustomerLogoInteractive'
import { CustomerLogoInteractiveCard } from '~/components/CustomerLogo/classes/CustomerLogoInteractiveCard'

export class CustomerLogoInteractiveCards implements ICustomerLogoInteractiveCards {
  containerSize: string
  colorTheme: string
  cards: Ref<ICustomerLogoInteractiveCard[]>
  currentActiveCard: Ref<ICustomerLogoInteractiveCard | undefined>
  secondCard: Ref<ICustomerLogoInteractiveCard | undefined>
  previousCard: Ref<ICustomerLogoInteractiveCard | undefined>
  littleCards: Ref<ICustomerLogoInteractiveCard[]>
  littleCardsLength: Ref<number>

  constructor({
    cards,
    containerSize,
    colorTheme,
  }: CustomerLogoInteractiveCardsProps) {
    this.containerSize = containerSize
    this.colorTheme = colorTheme
    this.cards = ref([])
    this.currentActiveCard = ref()
    this.secondCard = ref()
    this.previousCard = ref()
    this.littleCards = ref([])
    this.littleCardsLength = ref(0)
    this.initCards(cards)

    this.changeCard = this.changeCard.bind(this)
    this.setClassnameToLittleCard = this.setClassnameToLittleCard.bind(this)
  }

  initCards(cards: ICard[]) {
    this.cards.value = cards.map(network => new CustomerLogoInteractiveCard({
      ...network,
      colorTheme: this.colorTheme,
      containerSize: this.containerSize,
    }))
    this.currentActiveCard.value = this.cards.value[0]
    this.secondCard.value = this.cards.value[1]
    this.littleCards.value = this.cards.value.filter(card => card.id !== this.currentActiveCard.value!.id)
    this.littleCardsLength.value = this.littleCards.value.length
  }

  changeCard(card: ICustomerLogoInteractiveCard) {
    this.previousCard.value = this.currentActiveCard.value
    const currentCardIndex = this.littleCards.value.findIndex(findCard => findCard.id === card.id)
    this.littleCards.value.splice(currentCardIndex, 0, this.previousCard.value as ICustomerLogoInteractiveCard)
    this.currentActiveCard.value = card
    this.littleCards.value = this.littleCards.value.filter(filterCard => filterCard.id !== this.currentActiveCard.value!.id)
  }

  setClassnameToLittleCard() {
    if (this.containerSize === '1026') { return 'customers-cards__little--middle-container' }
    return ''
  }
}

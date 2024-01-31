import type { ComputedRef } from 'vue'
import type {
  IPressCenter,
  PressCenterCard,
  PressCenterProps,
} from '~/components/PressCenter/interfaces/IPressCenter'
import type { ISwiperOptions } from '~/interfaces/common/commonInterfaces'

export class PressCenter implements IPressCenter {
  swiperOptions: ISwiperOptions = {
    speed: 750,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: false,
    allowTouchMove: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.ui-prev-next-buttons__button--next',
      prevEl: '.ui-prev-next-buttons__button--prev',
      disabledClass: 'disabled',
    },

    breakpoints: {
      550: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      900: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1150: {
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  }

  triggerBreakpoint = 768
  cards: ComputedRef<PressCenterCard[]>

  constructor(props: PressCenterProps) {
    this.cards = computed(() => {
      const sortedCards = [...props.items]
      // @ts-ignore
      return sortedCards.sort((cardA, cardB) => new Date(cardB.date) - new Date(cardA.date))
    })
  }
}

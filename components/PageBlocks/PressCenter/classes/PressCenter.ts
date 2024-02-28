import type { ComputedRef } from 'vue'
import type {
  IPressCenter, IPressCenterColorClasses,
  PressCenterCard,
  PressCenterProps,
} from '~/components/PageBlocks/PressCenter/interfaces/IPressCenter'
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
  colorTheme: string
  cards: ComputedRef<PressCenterCard[]>
  colorClassesNames: IPressCenterColorClasses

  constructor(props: PressCenterProps) {
    this.colorTheme = props.primary?.colorTheme || 'white'
    this.cards = computed(() => {
      const transformedCards = props.items.map(item => ({
        ...item,
        link: {
          ...item.link,
          url: checkAndExtractDomain(item.link.url).ourDomain ? new URL(item.link.url).pathname : item.link.url,
        },
        target: setTargetForLinks(item.link.url),
        external: !checkAndExtractDomain(item.link.url).ourDomain,
      }))
      // @ts-ignore
      return [...transformedCards].sort((cardA, cardB) => new Date(cardB.date) - new Date(cardA.date))
    })

    this.colorClassesNames = {
      backgroundColorClass: colorConverterToClass('slice-bg', this.colorTheme),
      cardBackgroundColorClass: colorConverterToClass('bg', this.colorTheme),
      titleColorClass: `press-center-slice__card-body-title--${ this.colorTheme }`,
      descriptionColorClass: `press-center-slice__card-body-description--${ this.colorTheme }`,
    }
  }
}

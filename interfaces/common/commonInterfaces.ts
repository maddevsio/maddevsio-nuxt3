export interface IntersectionObserverInstance {
  observe: (target: Element) => void
  unobserve: (target: Element) => void
  disconnect: () => void
}

export interface ISwiperOptions {
  speed: number
  slidesPerView: number
  slidesPerGroup: number
  loop: boolean
  grabCursor: boolean
  allowTouchMove: boolean
  spaceBetween: number
  navigation: {
    nextEl: string
    prevEl: string
    disabledClass: string
  },

  breakpoints: {
    550: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },

    900: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },

    1150: {
      spaceBetween: number
      slidesPerView: number
      slidesPerGroup: number
    },
  },
}

import type { IDigestsProps } from '~/components/Digest/interfaces/IDigests'
import type { IDigestPostFooter } from '~/components/Digest/interfaces/Post/IDigestPostFooter'
import type { ISwiperOptions } from '~/interfaces/common/commonInterfaces'
export class DigestPostFooter implements IDigestPostFooter {
  uid: string
  date: Date | string
  swiperOptions: ISwiperOptions = {
    speed: 750,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: true,
    allowTouchMove: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.digest-posts-prev-next-buttons__button--next',
      prevEl: '.digest-posts-prev-next-buttons__button--prev',
      disabledClass: 'disabled',
    },

    breakpoints: {
      640: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      960: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  }

  constructor({ uid, date }: IDigestsProps) {
    this.uid = uid
    this.date = date
  }
}

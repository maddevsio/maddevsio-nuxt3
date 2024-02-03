import type { PrismicPlugin } from '@prismicio/vue'
import type {
  IPostItem,
  IPostsSectionDefault,
  PostsSectionDefaultProps,
} from '~/components/PostsSection/interfaces/IPostsSectionDefault'
import type { ISwiperOptions } from '~/interfaces/common/commonInterfaces'

export class PostsSectionDefault implements IPostsSectionDefault {
  swiperOptions: ISwiperOptions = {
    speed: 750,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: false,
    allowTouchMove: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.tag-posts-prev-next-buttons__button--next',
      prevEl: '.tag-posts-prev-next-buttons__button--prev',
      disabledClass: 'disabled',
    },

    breakpoints: {
      550: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      960: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  }

  triggerBreakpoint: number = 959
  posts: IPostItem[]

  constructor(props: PostsSectionDefaultProps, prismic: PrismicPlugin) {
    this.posts = transformPostInfo(props.items, prismic)
  }
}

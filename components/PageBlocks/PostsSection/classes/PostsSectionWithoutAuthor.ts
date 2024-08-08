import type { PrismicPlugin } from '@prismicio/vue'
import type { RichTextField } from '@prismicio/client'
import type {
  IPostsSectionWithoutAuthor,
  PostsSectionWithoutAuthorProps,
} from '~/components/PageBlocks/PostsSection/interfaces/IPostsSectionWithoutAuthor'
import type { ISwiperOptions } from '~/interfaces/common/commonInterfaces'
import type { IPostItem } from '~/components/PageBlocks/PostsSection/interfaces/IPostsSectionDefault'

export class PostsSectionWithoutAuthor implements IPostsSectionWithoutAuthor {
  swiperOptions: ISwiperOptions = {
    speed: 750,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: false,
    allowTouchMove: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.ebook-posts-prev-next-buttons__button--next',
      prevEl: '.ebook-posts-prev-next-buttons__button--prev',
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
  title: RichTextField
  containerSize: string

  constructor(props: PostsSectionWithoutAuthorProps, prismic: PrismicPlugin) {
    this.posts = transformPostInfo(props.items, prismic)
    this.title = props.primary?.title
    this.containerSize = props.primary?.containerSize || '1026'
  }
}

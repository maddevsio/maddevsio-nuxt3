<script setup lang="ts">
import { cuOptionsForSwiper } from '~/components/Blog/config/cuSwiperOptions'
import { SwiperPagination } from '#imports'

const props = defineProps({
  cuSectionCards: {
    type: Array,
    required: true,
  },
})

const { isMobile } = useCheckMobile(639)
const optionsArticles = cuOptionsForSwiper.optionsArticles
const optionsCard = {
  ...cuOptionsForSwiper.optionsCard,
  breakpoints: {
    640: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: props.cuSectionCards.length % 2 || isMobile.value ? 1 : 2,
    },

    840: {
      spaceBetween: 65,
    },

    1110: {
      spaceBetween: 94,
      slidesPerView: 2,
      slidesPerGroup: props.cuSectionCards.length % 2 || isMobile.value ? 1 : 2,
    },
  },
}

const activeElement = ref(0)
const customerCard = ref<HTMLElement[]>()

const onHoverCard = (event: MouseEvent | TouchEvent) => {
  const target = event.currentTarget as HTMLElement
  customerCard.value!.forEach((card, i) => {
    card.classList.remove('customer-university-cards__card--active')
    // @ts-ignore
    customerCard.value![i].firstChild!.firstChild!.swiper.autoplay.stop()
  })
  target.classList.add('customer-university-cards__card--active')
  // @ts-ignore
  target.firstChild!.firstChild!.swiper.autoplay.start()
}

const onUnHoverCard = (event: MouseEvent | TouchEvent) => {
  const target = event.currentTarget as HTMLElement
  // @ts-ignore
  if (target.firstChild!.firstChild!.swiper) {
    target.classList.remove('customer-university-cards__card--active')
    // @ts-ignore
    target.firstChild!.firstChild!.swiper.autoplay.stop()
    customerCard.value![activeElement.value].classList.add('customer-university-cards__card--active')
    // @ts-ignore
    customerCard.value![activeElement.value].firstChild!.firstChild!.swiper.autoplay.start()
  }
}

const nextClickHandler = () => {
  // @ts-ignore
  customerCard.value![activeElement.value].firstChild!.firstChild!.swiper.autoplay.stop()
  activeElement.value += props.cuSectionCards.length % 2 || isMobile.value ? 1 : 2
  // @ts-ignore
  customerCard.value![activeElement.value].firstChild!.firstChild!.swiper.autoplay.start()
}

const prevClickHandler = () => {
  // @ts-ignore
  customerCard.value![activeElement.value].firstChild!.firstChild!.swiper.autoplay.stop()
  activeElement.value -= props.cuSectionCards.length % 2 || isMobile.value ? 1 : 2
  if (activeElement.value < 0) { activeElement.value = 0 }
  // @ts-ignore
  customerCard.value![activeElement.value].firstChild!.firstChild!.swiper.autoplay.start()
}

const setFirstColumnActive = () => {
  if (customerCard.value) {
    customerCard.value.forEach((card, i) => {
      card.classList.remove('customer-university-cards__card--active')
      if (customerCard.value && customerCard.value?.length) {
        // @ts-ignore
        customerCard.value[i].firstChild!.firstChild!.swiper.autoplay.stop()
      }
    })
    customerCard.value[activeElement.value].classList.add('customer-university-cards__card--active')
    if (customerCard.value && customerCard.value?.length) {
      // @ts-ignore
      customerCard.value[activeElement.value].firstChild.firstChild.swiper.autoplay.start()
    }
  }
}

onMounted(() => {
  setFirstColumnActive()
})

onUpdated(() => {
  setFirstColumnActive()
})
</script>

<template>
  <div class="customer-university-cards">
    <Swiper
      v-bind="optionsCard"
      :modules="[SwiperNavigation]"
      class="customer-university-cards__wrapper"
    >
      <SwiperSlide
        v-for="(card, i) in cuSectionCards"
        :key="`${card.primary.title}-${i}`"
      >
        <div
          ref="customerCard"
          class="customer-university-cards__card"
          @mouseenter="onHoverCard($event)"
          @mouseleave="onUnHoverCard($event)"
        >
          <div
            ref="articles"
            class="customer-university-cards__card-articles"
          >
            <Swiper
              ref="articlesSwiper"
              v-bind="optionsArticles"
              :modules="[SwiperAutoplay, SwiperPagination]"
            >
              <SwiperSlide
                v-for="(post, postIndex) in card.items"
                :key="`${postIndex}`"
              >
                <NuxtLink
                  :to="`/customer-university/${post.article.uid}/`"
                  class="customer-university-cards__card-articles-link"
                >
                  <img
                    loading="lazy"
                    :src="`${post.article.data.featured_image.url}`"
                    :alt="post.article.data.featured_image.alt"
                    width="408"
                    height="226"
                    class="customer-university-cards__card-articles-image"
                  >
                </NuxtLink>
                &nbsp;
              </SwiperSlide>
              <div
                class="swiper-pagination"
              />
            </Swiper>
          </div>
          <h3 class="customer-university-cards__card-title">
            {{ card.primary.title }}
          </h3>
          <p class="customer-university-cards__card-description">
            {{ card.primary.description }}
          </p>
          <p
            class="customer-university-cards__card-subdescription"
          >
            {{ card.primary.sub_description }}
          </p>
          <NuxtLink
            :to="card.primary.link_url"
            class="customer-university-cards__card-link"
          >
            See More
          </NuxtLink>
        </div>
      </SwiperSlide>
      <BlogUICUNavigationButtons
        v-show="cuSectionCards.length > 2 || isMobile"
        :active-element="activeElement"
        :array-cards="cuSectionCards"
        :is-mobile="isMobile"
        @next-click="nextClickHandler"
        @prev-click="prevClickHandler"
      />
    </Swiper>
  </div>
</template>
<style lang="scss" scoped>
.customer-university-cards {
  overflow: hidden;
  padding: 48px 44px 0 80px;

  &__wrapper {
    align-items: center;
    -webkit-perspective: 1500px;
    perspective: 1500px;
    transition: 0.5s;
    overflow: visible;

    :deep(.swiper-wrapper) {
      margin-bottom: 44px;
    }
  }

  &__card {
    box-sizing: border-box;
    overflow: hidden;
    max-width: 505px;
    flex-shrink: 0;
    padding: 48px;
    background-color: $bgcolor--black-pale;
    transition: 0.5s cubic-bezier(.23,.98,.51,1);
    transform: scale(1) translateZ(0);
    will-change: transform;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    position: relative;

    @media screen and (max-width: 1020px) {
      padding: 32px;
    }

    &-articles {
      display: flex;
      overflow: hidden;
      width: 100%;
      max-width: 408px;
      max-height: 290px;
      margin-bottom: 24px;
      transition: 0.3s cubic-bezier(.23,.98,.51,1);

      &-image {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }

      :deep(.swiper-horizontal) {
        padding-bottom: 24px;
      }

      :deep(.swiper-pagination) {
        bottom: 0;

        .swiper-pagination-bullet {
          background-color: #3F3F3F;
          opacity: 0;
          transform: scale(1);

          &-active {
            background-color: $bgcolor--red;

            &-main {
              opacity: 1;
            }
          }

          &-active-next,
          &-active-prev {
            opacity: 0.5;
            transform: scale(1);
          }

          &-active-next-next,
          &-active-next-next {
            opacity: 0.2;
            transform: scale(1);
          }
        }
      }

      @media screen and (max-width: 1020px) {
        &-articles {
          margin-bottom: 12px;

          :deep(.swiper-container) {
            padding-bottom: 12px;
            width: 100%;
          }
        }
      }
    }

    &-title {
      @include font('Inter', 24px, 700);
      line-height: 130%;
      color: $text-color--white-primary;
      margin-bottom: 18px;
    }

    &-description,
    &-subdescription {
      @include font('Inter', 14px, 500);
      line-height: 150%;
      letter-spacing: -0.4px;
      color: $text-color--white-primary;
      margin-bottom: 28px;
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    &-subdescription {
      font-size: 12px;
      color: $text-color--grey-opacity-40-percent;
    }

    &-link {
      @include font('Inter', 16px, 400);
      line-height: 26px;
      color: $text-color--white-primary;
      border: 1px solid $border-color--white;
      border-radius: 5px;
      display: flex;
      place-content: center;
      padding: 13px 0;
      transition: 0.5s cubic-bezier(.23,.98,.51,1);
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      &:hover {
        background-color: $bgcolor--red;
        border-color: $border-color--red;
      }
    }

    &--active {
      transform: scale(112%) translateZ(0);
      will-change: transform;
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: block;
    }

    @media screen and (max-width: 840px) {
      &-articles {
        max-width: 270px;
        max-height: 190px;
      }

      &-title {
        font-size: 16px;
        line-height: 130%;
      }

      &-description,
      &-subdescription {
        font-size: 14px;
        line-height: 150%;
      }

      &-subdescription {
        font-size: 12px;
      }

      &-link {
        font-size: 14px;
        line-height: 150%;
        padding: 12px 0;
      }
    }

    @media screen and (max-width: 768px) {
      &-articles {
        max-width: 244px;
        height: 170px;

        &-image {
          width: 244px;
          height: 150px;
        }
      }
    }

    @media screen and (max-width: 639px) {
      max-width: 100%;

      &-articles {
        max-width: 100%;
        max-height: 315px;
        height: auto;

        &-image {
          width: 100%;
          height: auto;
        }
      }

      &--active {
        transform: scale(100%) translateZ(0);
      }
    }

    @media screen and (max-width: 450px) {
      &-articles {
        height: 176px;

        &-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1110px) {
    padding-left: 48px;
  }

  @media screen and (max-width: 1020px) {
    padding: 30px 12px 0;
  }

  @media screen and (max-width: 639px) {
    padding: 0 12px;

    &__wrapper {
      :deep(.swiper-wrapper) {
        margin-bottom: 32px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    padding: 0;
  }
}
</style>

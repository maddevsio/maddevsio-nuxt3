<script setup lang="ts">
import type { ReviewsData } from '~/interfaces/server/IServerClutchReviews'

const SWIPER_OPTIONS = {
  slidesPerView: 1,
  spaceBetween: 15,
  centeredSlides: false,
  initialSlide: 0,
  navigation: {
    nextEl: '.clutch-reviews-slider__next-button',
    prevEl: '.clutch-reviews-slider__prev-button',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.clutch-reviews-slider__dots',
    clickable: true,
    horizontalClass: 'horizontal',
  },
  breakpoints: {
    650: {
      spaceBetween: 15,
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
    },
  },
}

defineProps({
  colorTheme: {
    type: String,
    default: 'white',
  },

  title: {
    type: String,
    default: 'Mad Devs\' Reviews on Clutch',
  },
})

const clutchReviews = reactive<ReviewsData>({
  headerRating: '',
  rating: '',
  reviewsCount: '',
  reviews: [],
})

try {
  const { data } = await useFetch<ReviewsData>('/api/clutch-reviews/?count=all')
  if (data.value && data.value.headerRating && data.value.rating && data.value.reviewsCount && data.value.reviews.length) {
    clutchReviews.headerRating = data.value.headerRating
    clutchReviews.rating = data.value.rating
    clutchReviews.reviewsCount = data.value.reviewsCount
    clutchReviews.reviews = data.value.reviews
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e)
}
</script>
<template>
  <div class="clutch-reviews-slider">
    <LazySharedClutchReviewsHeader
      :title="title"
      :html-stars="clutchReviews.headerRating"
      :rating="clutchReviews.rating"
      :reviews-count="clutchReviews.reviewsCount"
      :color-theme="colorTheme"
    />
    <Swiper
      v-bind="SWIPER_OPTIONS"
      :class="`clutch-reviews-slider__swiper clutch-reviews-slider__swiper--${colorTheme}`"
      :modules="[SwiperPagination, SwiperNavigation]"
    >
      <template v-if="clutchReviews.reviews.length">
        <SwiperSlide
          v-for="(card, cardIdx) in clutchReviews.reviews"
          :key="`clutch-reviews-${cardIdx}`"
        >
          <LazySharedClutchReviewsCard
            :href="card.href"
            :rating="card.rating"
            :fivestar="card.fivestar"
            :text="card.text"
            :author="card.author"
            :verified="card.verified"
            :color-theme="colorTheme"
          />
        </SwiperSlide>
      </template>
      <template v-else>
        <SwiperSlide
          v-for="(skeleton) in 6"
          :key="skeleton"
        >
          <LazySharedClutchReviewsSkeletonCards
            :color-theme="colorTheme"
          />
        </SwiperSlide>
      </template>
      <div class="clutch-reviews-slider__navigations">
        <button
          class="clutch-reviews-slider__button clutch-reviews-slider__prev-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
          >
            <path
              d="M10.7645 1.0929L2.26465 9.59277L10.7645 18.0927"
              stroke="#A8A8A8"
              stroke-width="2"
            />
          </svg>
        </button>
        <div class="clutch-reviews-slider__dots" />
        <button
          class="clutch-reviews-slider__button clutch-reviews-slider__next-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
          >
            <path
              d="M1 1L9 9.5L1 18"
              stroke="#A8A8A8"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </Swiper>
  </div>
</template>
<style scoped lang="scss">
.clutch-reviews-slider {
  margin-bottom: 0;

  :deep(.clutch-reviews__card) {
    max-height: unset;
    height: 260px;
    box-sizing: border-box;
  }

  :deep(.swiper-slide) {
    height: initial;
  }

  &__swiper {
    &--black {
      &::before, &::after {
        background: linear-gradient(90deg, #101113 2.97%, rgba(29, 29, 31, 0) 100%);
      }

      &::after {
        background: linear-gradient(270.38deg, #101113 10.95%, rgba(29, 29, 31, 0) 97.91%);
      }
    }

    &--white {
      &::before {
        background: linear-gradient(90deg, #FFF 12.93%, rgba(245, 247, 249, 0.00) 48.25%);
      }

      &::after {
        background: linear-gradient(270deg, #FFF 21.9%, rgba(245, 247, 249, 0.00) 53.43%);
      }
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      display: block;
      z-index: 10;
    }

    &::after {
      left: unset;
      right: 0;
    }

    @media screen and (min-width: 650px) {
      &::before,
      &::after {
        content: '';
      }
    }
  }

  &__navigations {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    margin-top: 24px;
  }

  &__button {
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;

    &:not(.disabled) {
      svg {
        path {
          stroke: $text-color--red;
        }
      }
    }
  }

  @include old-safari-support {
    &__prev-button {
      margin-right: 26px;
    }

    &__next-button {
      margin-left: 26px;
    }
  }

  &__dots {
    display: flex;
    margin-top: -3px;

    :deep(.swiper-pagination-bullet) {
      width: 6px;
      height: 6px;
      background: #D9D9D9;
      padding: 0;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      opacity: 1;
      margin-right: 3px;

      &:last-child {
        margin-right: 0;
      }
    }

    :deep(.swiper-pagination-bullet-active) {
      background: $bgcolor--red;
    }
  }
}
</style>

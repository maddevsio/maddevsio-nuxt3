<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Mad Devs Reviews',
  },
  rating: {
    type: String,
    default: '',
  },
  htmlStars: {
    type: String,
    default: '',
  },
  reviewsCount: {
    type: String,
    default: '',
  },
  colorTheme: {
    type: String,
    default: 'black',
  },
})
</script>
<template>
  <div class="clutch-reviews__header">
    <a
      href="https://clutch.co/profile/mad-devs"
      target="_blank"
      :class="`clutch-reviews__header-title clutch-reviews__header-title--${colorTheme}`"
      rel="noopener"
    >
      {{ title }}
    </a>
    <div
      v-if="rating && htmlStars && reviewsCount"
      class="clutch-reviews__header-rating"
    >
      <span
        :class="`clutch-reviews__header-number clutch-reviews__header-number--${colorTheme}`"
      >
        {{ rating }}
      </span>
      <div
        class="clutch-reviews__stars"
        v-html="htmlStars"
      />
      <a
        href="https://clutch.co/profile/mad-devs#reviews"
        target="_blank"
        :class="`clutch-reviews__header-reviews-link clutch-reviews__header-reviews-link--${colorTheme}`"
        rel="noopener"
      >
        {{ reviewsCount }}
      </a>
    </div>
    <SharedClutchReviewsSkeletonHeader
      v-else
      :color-theme="colorTheme"
    />
  </div>
</template>
<style scoped lang="scss">
.clutch-reviews {
  &__header {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 48px;

    :deep(.fivestar) {
      display: flex;
      gap: 6px;
      padding-top: 0;
    }

    :deep(.star) {
      .on {
        display: block;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        background-color: $bgcolor--red;
      }
    }

    &-title {
      @include font('Inter', 26px, 600);
      line-height: 26px;

      &--black {
        color: $text-color--white-primary;
      }

      &--white {
        color: $text-color--chinese-black;
      }

      @media screen and (max-width: 900px) {
        font-size: 18px;
        line-height: 148%;
      }
    }

    &-number {
      @include font('Inter', 24px, 400);
      line-height: 130%;

      &--black {
        color: $text-color--white-primary;
      }

      &--white {
        color: $text-color--chinese-black;
      }
    }

    &-rating {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    :deep(.fivestar) {
      padding-top: 1px;
    }

    :deep(.star) {
      .on {
        width: 24px !important;
        height: 24px;
      }
    }

    &-reviews-link {
      @include font('Inter', 16px, 400);
      line-height: 130%;
      text-transform: capitalize;

      &--black {
        color: $text-color--white-primary;
      }

      &--white {
        color: $text-color--chinese-black;
      }
    }

    @media screen and (max-width: 900px) {
      gap: 24px;

      &-title {
        font-size: 18px;
        line-height: 148%;
      }

      &-number {
        font-size: 16px;
        line-height: 130%;
      }

      &-reviews-link {
        font-size: 10px;
        line-height: 130%;
        margin-left: 6px;
      }

      &-rating {
        gap: 5px;
      }

      :deep(.fivestar) {
        padding-top: 1px;
        gap: 4px;
      }

      :deep(.star) {
        .on {
          width: 15px !important;
          height: 15px;
        }
      }
    }

    @media screen and (max-width: 590px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 7px;
    }
  }
}
</style>

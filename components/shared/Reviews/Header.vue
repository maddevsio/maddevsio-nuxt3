<script setup lang="ts">
import type { PropType } from 'vue'
import type { ImageField, FilledLinkToWebField } from '@prismicio/client'

defineProps({
  title: {
    type: String,
    default: 'Mad Devs Reviews',
  },
  rating: {
    type: String,
    default: '',
  },
  reviewsCount: {
    type: String,
    default: '',
  },
  reviewLink: {
    type: Object as PropType<FilledLinkToWebField>,
    default: () => ({}),
  },
  starColors: {
    type: String,
    default: '',
  },
  poweredBy: {
    type: Object as PropType<ImageField>,
    default: () => ({}),
  },
})
</script>
<template>
  <div class="reviews__header">
    <h3
      class="reviews__header-title"
    >
      {{ title }}
    </h3>
    <div
      v-if="rating && reviewsCount"
      class="reviews__header-rating"
    >
      <span
        class="reviews__header-number"
      >
        {{ rating }}
      </span>
      <SharedReviewsStars
        :star-colors="starColors"
        :rating="rating"
      />
      <p
        class="reviews__header-reviews-link"
      >
        {{ reviewsCount }} Reviews
      </p>
    </div>
    <Component
      :is="reviewLink?.url ? 'a' : 'div'"
      v-if="poweredBy?.url"
      :href="reviewLink?.url ? reviewLink?.url : null"
      :target="reviewLink?.url ? '_blank' : null"
      class="reviews__header-powered-by"
    >
      <span class="reviews__header-powered-by-text">
        Powered by
      </span>
      <img
        loading="lazy"
        :src="poweredBy.url"
        :alt="poweredBy.alt || 'Logo'"
        width="105"
        height="26"
        class="reviews__header-powered-by-logo"
      >
    </Component>
  </div>
</template>
<style scoped lang="scss">
@import 'assets/styles/colorClasses/colors';

.reviews {
  &__header {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 48px;

    &-title {
      @include font('Inter', 26px, 600);
      line-height: 26px;
      color: $text-color--white-primary;

      @media screen and (max-width: 900px) {
        font-size: 18px;
        line-height: 148%;
      }
    }

    &-number {
      @include font('Inter', 24px, 400);
      line-height: 130%;
      color: $text-color--white-primary;
    }

    &-rating {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &-reviews-link {
      @include font('Inter', 16px, 400);
      line-height: 130%;
      color: $text-color--white-primary;
    }

    &-powered-by {
      margin-left: auto;
      display: flex;
      align-items: center;

      &-text {
        @include font('Inter', 16px, 400);
        line-height: 26px;
        color: $text-color--white-primary;
        margin-right: 8px;
        display: inline-block;
      }

      &-logo {
        width: 105px;
        height: 26px;
      }

      @media screen and (max-width: 800px) {
        &-text {
          font-size: 12px;
          line-height: 15px;
        }
      }
    }

    @media screen and (max-width: 1024px) {
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
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 7px;

      &-powered-by {
        margin-left: 0;
        align-items: flex-end;
      }
    }
  }
}
</style>

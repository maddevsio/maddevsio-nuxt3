<script setup lang="ts">
import type { PropType } from 'vue'
import { ClutchReviewsBlack } from '~/components/PageBlocks/Customers/classes/ClutchReviewsBlack'
import type { ReviewsData } from '~/interfaces/server/IServerClutchReviews'
import type { ClutchReviewsProps } from '~/components/PageBlocks/Customers/interfaces/IClutchReviewsBlack'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ClutchReviewsProps>,
    default: () => ({}),
  },
})

const clutchReviews = new ClutchReviewsBlack(slice)

const { data } = await useFetch<ReviewsData>('/api/clutch-reviews')
clutchReviews.updateReviewsData(data.value)
</script>
<template>
  <div class="clutch-reviews">
    <div class="container">
      <LazySharedClutchReviewsHeader
        v-if="clutchReviews.reviewsData"
        :title="clutchReviews.title"
        :html-stars="clutchReviews.reviewsData.value!.headerRating || ''"
        :rating="clutchReviews.reviewsData.value!.rating || ''"
        :reviews-count="clutchReviews.reviewsData.value!.reviewsCount || ''"
        color-theme="black"
      />
      <div
        v-if="Object.keys(clutchReviews.reviewsData.value).length"
        class="clutch-reviews__cards"
      >
        <LazySharedClutchReviewsCard
          v-for="(card, cardIdx) in clutchReviews.reviewsData.value!.reviews"
          :key="`clutch-reviews-${cardIdx}`"
          :href="card.href"
          :rating="card.rating"
          :fivestar="card.fivestar"
          :text="card.text"
          :author="card.author"
          :verified="card.verified"
          color-theme="black"
        />
      </div>
      <div
        v-else
        class="clutch-reviews__skeleton-cards"
      >
        <LazySharedClutchReviewsSkeletonCards
          v-for="(card) in 4"
          :key="card"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.clutch-reviews {
  background-color: $bgcolor--black;

  &__cards,
  &__skeleton-cards {
    @include grid(repeat(4, 1fr), auto, 20px, 20px);

    @media screen and (max-width: 1050px) {
      @include grid(repeat(2, 1fr), auto, 20px, 20px);
    }

    @media screen and (max-width: 590px) {
      @include grid(repeat(1, 1fr), auto, 20px, 20px);
    }
  }
}
</style>

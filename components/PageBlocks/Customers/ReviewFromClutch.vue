<script setup lang="ts">
import { type PropType } from 'vue'
import axios from 'axios'
import type { ReviewsData } from '~/interfaces/server/IServerClutchReviews'

interface ClutchReviewsProps {
  primary: {
    title: string
  }
}

const { slice } = defineProps({
  slice: {
    type: Object as PropType<ClutchReviewsProps>,
    default: () => ({}),
  },
})

const title = slice.primary.title || 'Mad Devs\' Reviews on Clutch'
const reviewsData = ref<ReviewsData | null>(null)
const updateReviewsData = (reviews: any) => {
  reviewsData.value = reviews
}

onMounted(async () => {
  const { data } = await axios.get('/api/clutch-reviews')
  updateReviewsData(data)
})
</script>
<template>
  <div class="clutch-reviews">
    <div class="container">
      <LazySharedClutchReviewsHeader
        v-if="reviewsData"
        :title="title"
        :html-stars="reviewsData.headerRating || ''"
        :rating="reviewsData.rating || ''"
        :reviews-count="reviewsData.reviewsCount || ''"
        color-theme="black"
      />
      <div
        v-if="reviewsData && Object.keys(reviewsData).length && reviewsData.reviews"
        class="clutch-reviews__cards"
      >
        <LazySharedClutchReviewsCard
          v-for="(card, cardIdx) in reviewsData.reviews"
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
        <SharedClutchReviewsSkeletonCards
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

<script setup lang="ts">
import type { PropType } from 'vue'
import type { CustomerTestimonialsSliceGlassdoorTestimonials } from '~/prismicio-types'

const { slice } = defineProps({
  slice: {
    type: Object as PropType<CustomerTestimonialsSliceGlassdoorTestimonials>,
    default: () => ({}),
  },
})

const starColor = colorConverterToClass('bg', slice.primary.starColor || 'green')
</script>

<template>
  <section class="reviews">
    <div class="container">
      <LazySharedReviewsHeader
        :title="slice.primary.title"
        :rating="slice.primary.totalScore"
        :review-link="slice.primary.reviewLink"
        :reviews-count="slice.primary.countReviews"
        :star-colors="starColor"
        :powered-by="slice.primary.poweredByLogo"
      />
      <div class="reviews__cards">
        <SharedReviewsCard
          v-for="(card) in slice.primary.cards"
          :key="card.description"
          :verified="card.verifiedReview"
          :star-colors="starColor"
          :rating="card.rating"
          :text="card.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.reviews {
  &__cards {
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

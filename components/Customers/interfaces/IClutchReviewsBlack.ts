import type { Ref } from 'vue'
import type { ReviewsData } from '~/interfaces/server/IServerClutchReviews'

export interface ClutchReviewsProps {
  primary: {
    title: string
  }
}

export interface IClutchReviewsBlack {
  title: string
  reviewsData: Ref<ReviewsData | null>
  updateReviewsData(reviews: ReviewsData): void
}

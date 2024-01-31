import { ref, type Ref } from 'vue'
import type {
  ClutchReviewsProps,
  IClutchReviewsBlack,
} from '~/components/Customers/interfaces/IClutchReviewsBlack'
import type { ReviewsData } from '~/interfaces/server/IServerClutchReviews'

export class ClutchReviewsBlack implements IClutchReviewsBlack {
  title = 'Mad Devs\' Reviews on Clutch'
  reviewsData: Ref<ReviewsData | null>

  constructor(props: ClutchReviewsProps | any) {
    this.title = props.primary.title
    this.reviewsData = ref(null)
  }

  updateReviewsData(reviews: any) {
    this.reviewsData.value = reviews
  }
}

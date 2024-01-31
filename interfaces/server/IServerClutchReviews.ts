interface ReviewsItem {
  href: string | null
  rating: string | null
  fivestar: string | null
  text: string | null
  author: string | null
  verified: string | null
}

export interface ReviewsData {
  reviews: ReviewsItem[]
  headerRating?: string | null
  rating?: string
  reviewsCount?: string
}

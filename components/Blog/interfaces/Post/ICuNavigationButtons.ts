export interface CuNavigationButtonsProps {
  uid: string
  cuPosts: { label: string, uid: string }[]
}

export interface ICuNavigationButtons {
  uid: string
  cuPosts: { label: string, uid: string }[]
  currentPost: { label: string, uid: string } | undefined
  currentPostIndex: number | undefined
  nextArticleUrl: string
  prevArticleUrl: string
  getCuUrl(direction: number): string
}

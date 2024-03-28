import type { ComputedRef } from 'vue'

export interface CuNavigationButtonsProps {
  uid: string
  cuPosts: { label: string, uid: string }[]
}

export interface ICuNavigationButtons {
  uid: string
  cuPosts: { label: string, uid: string }[]
  currentPost: ComputedRef<{ label: string, uid: string } | undefined>
  currentPostIndex: ComputedRef<number | undefined>
  nextArticleUrl: ComputedRef<string>
  prevArticleUrl: ComputedRef<string>
  getCuUrl(direction: number): string
}

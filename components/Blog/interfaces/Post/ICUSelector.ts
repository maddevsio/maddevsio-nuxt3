import type { Router } from 'vue-router'

export interface CuSelectorProps {
  uid: string
  cuPosts: { label: string, uid: string }[]
}

export interface ICUSelector {
  uid: string
  cuPosts: { label: string, uid: string }[]
  currentPost: { label: string, uid: string } | undefined
  currentPostIndex: number | undefined
  handleChange(selectedPost: { label: string, uid: string }, router: Router): Promise<void>
}

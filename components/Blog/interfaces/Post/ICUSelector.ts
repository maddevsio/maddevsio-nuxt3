import type { Router } from 'vue-router'
import type SelectOpenIndicator from '~/components/Blog/UI/SelectOpenIndicator.vue'

export interface CuSelectorProps {
  uid: string
  cuPosts: { label: string, uid: string }[]
}

export interface ICUSelector {
  uid: string
  cuPosts: { label: string, uid: string }[]
  openIndicator: InstanceType<typeof SelectOpenIndicator>
  currentPost: { label: string, uid: string } | undefined
  currentPostIndex: number | undefined
  handleChange(selectedPost: { label: string, uid: string }, router: Router): Promise<void>
}

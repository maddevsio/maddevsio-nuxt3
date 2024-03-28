import type { ComputedRef, Ref } from 'vue'

export interface HeaderCrumb {
  to: string
  title: string
}

export interface IHeaderCrumbs {
  crumbs: ComputedRef<HeaderCrumb[]>
  title: Ref<string>
  checkMutationHeadTitle(): void
  setEvent(index: number): string
  setTitle(index: number, crumb: HeaderCrumb): string
}

import type { ComputedRef, Ref } from 'vue'

export interface PostTableOfContentsItemProps {
  activeLink: Ref<string>
  link: string
  label: string
  index: number
  colorTheme: string
}

export interface IPostTableOfContentsItem {
  activeLink: Ref<string>
  link: string
  label: string
  index: number
  isActiveLink: ComputedRef<boolean>
  colorTheme: string
  linkColorClass: string
}

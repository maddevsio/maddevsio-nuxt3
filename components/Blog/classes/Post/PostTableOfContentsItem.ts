import type { ComputedRef, Ref } from 'vue'
import type {
  IPostTableOfContentsItem,
  PostTableOfContentsItemProps,
} from '~/components/Blog/interfaces/Post/IPostTableOfContentsItem'

export class PostTableOfContentsItem implements IPostTableOfContentsItem {
  activeLink: Ref<string>
  link: string
  label: string
  index: number
  isActiveLink: ComputedRef<boolean>
  colorTheme: string
  linkColorClass: string

  constructor({
    activeLink,
    link,
    label,
    index,
    colorTheme,
  }: PostTableOfContentsItemProps) {
    this.activeLink = activeLink
    this.link = link
    this.label = label
    this.index = index
    this.isActiveLink = computed(() => Boolean(link === activeLink.value))
    this.colorTheme = colorTheme || 'white'
    this.linkColorClass = `table-of-contents__links-link--${ this.colorTheme }`
  }
}

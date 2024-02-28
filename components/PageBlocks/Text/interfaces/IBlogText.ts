import type { RichTextField } from '@prismicio/client'
import type { Ref } from 'vue'

export interface BlogTextProps {
  primary: {
    text: RichTextField
  }
}

export interface IBlogText {
  text: RichTextField
  richTextRef: Ref<{ $el: Element } | null>
  observer: Ref<IntersectionObserver | null>
  observeTitles(updateActiveTitle: Function): void
  unObserveTitles(): void
  addEventListeners(): void
  removeEventListeners(): void
}

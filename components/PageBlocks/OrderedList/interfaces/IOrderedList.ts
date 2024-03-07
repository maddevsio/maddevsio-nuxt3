import type { RichTextField } from '@prismicio/client'
import type { Ref } from 'vue'

export interface OrderedItem {
  list_item: RichTextField
}

export interface OrderedListProps {
  primary: {
    list_introduction: RichTextField
    unordered_list: boolean
  }
  items: OrderedItem[]
}

export interface IOrderedList {
  items: OrderedItem[]
  listIntroduction: RichTextField
  unorderedList: boolean
  hasListIntroduction: boolean
  richTextRef: Ref<{ $el: HTMLElement } | null>
  observeTitles(updateActiveTitle: Function): void
  unObserveTitles(): void
  addEventListeners(): void
  removeEventListeners(): void
}

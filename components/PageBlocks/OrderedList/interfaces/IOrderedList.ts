import type { RichTextField } from '@prismicio/client'

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
}

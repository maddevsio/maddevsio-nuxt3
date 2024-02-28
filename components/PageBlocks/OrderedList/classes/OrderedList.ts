import type { RichTextField } from '@prismicio/client'
import type {
  IOrderedList,
  OrderedItem,
  OrderedListProps,
} from '~/components/PageBlocks/OrderedList/interfaces/IOrderedList'

export class OrderedList implements IOrderedList {
  items: OrderedItem[]
  listIntroduction: RichTextField
  unorderedList: boolean
  hasListIntroduction: boolean

  constructor(props: OrderedListProps) {
    this.items = props.items
    this.listIntroduction = props.primary?.list_introduction
    this.unorderedList = props.primary?.unordered_list
    this.hasListIntroduction = this.listIntroduction && this.listIntroduction.length !== 0
  }
}

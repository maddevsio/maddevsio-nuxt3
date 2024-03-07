import type { RichTextField } from '@prismicio/client'
import type { Ref } from 'vue'
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
  richTextRef: Ref<{ $el: HTMLElement } | null>
  observer: Ref<IntersectionObserver | null>

  intersectionObserverOptions = {
    threshold: 0,
    rootMargin: '-20% 0px -50% 0px',
  }

  constructor(props: OrderedListProps) {
    this.items = props.items
    this.listIntroduction = props.primary?.list_introduction
    this.unorderedList = props.primary?.unordered_list
    this.hasListIntroduction = this.listIntroduction && this.listIntroduction.length !== 0
    this.richTextRef = ref(null)
    this.observer = ref(null)

    this.observeTitles = this.observeTitles.bind(this)
    this.unObserveTitles = this.unObserveTitles.bind(this)
    this.addEventListeners = this.addEventListeners.bind(this)
    this.removeEventListeners = this.removeEventListeners.bind(this)
  }

  observeTitles(updateActiveTitle: Function) {
    if (this.richTextRef.value) {
      const observableTitle = this.richTextRef.value.$el.querySelectorAll('.anchor_title')
      this.observer.value = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateActiveTitle(entry.target.id)
          }
        })
      }, this.intersectionObserverOptions)

      if (observableTitle) {
        observableTitle.forEach(title => {
          this.observer.value?.observe(title)
        })
      }
    }
  }

  unObserveTitles() {
    if (this.richTextRef.value) {
      const observableTitle = this.richTextRef.value.$el.querySelectorAll('.anchor_title')
      if (observableTitle) {
        observableTitle.forEach(title => {
          this.observer.value?.unobserve(title)
        })
      }
    }
  }

  addEventListeners() {
    document.querySelectorAll('.copy-link')
      .forEach(link => {
      // @ts-ignore
        link.addEventListener('click', useCopyAnchorLink)
      })
  }

  removeEventListeners() {
    document.querySelectorAll('.copy-link')
    // @ts-ignore
      .forEach(link => link.removeEventListener('click', useCopyAnchorLink))
  }
}

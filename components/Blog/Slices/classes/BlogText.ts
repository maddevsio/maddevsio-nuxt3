import type { RichTextField } from '@prismicio/client'
import type { Ref } from 'vue'
import type { BlogTextProps, IBlogText } from '~/components/Blog/Slices/interfaces/IBlogText'

export class BlogText implements IBlogText {
  text: RichTextField
  richTextRef: Ref<{ $el: Element } | null>
  observer: Ref<IntersectionObserver | null>

  intersectionObserverOptions = {
    threshold: 0,
    rootMargin: '-20% 0px -50% 0px',
  }

  constructor(props: BlogTextProps) {
    this.text = props.primary.text
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

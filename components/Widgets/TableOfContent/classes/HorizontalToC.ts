import type { ComputedRef, Ref } from 'vue'
import type {
  HorizontalToCProps,
  IHorizontalToC,
  ToCAnchor,
} from '~/components/Widgets/TableOfContent/interfaces/IHorizontalToC'

export class HorizontalToC implements IHorizontalToC {
  triggerBreakpoint = 768
  horizontalTocRef: Ref<Element | null>
  isIntersection: Ref<boolean>
  anchors: ToCAnchor[]
  headerHeightGlobal: Ref<number>
  horizontalAnchorActiveGlobal: any
  stickyTopFromHeader: ComputedRef<{ '--stickyTop': string }>

  constructor(props: HorizontalToCProps, headerHeight: Ref<number>) {
    this.horizontalTocRef = ref(null)
    this.isIntersection = ref(false)
    this.anchors = props.items
    this.headerHeightGlobal = headerHeight
    this.horizontalAnchorActiveGlobal = props.activeAnchor
    this.stickyTopFromHeader = computed(() => ({
      '--stickyTop': `${ this.headerHeightGlobal.value - 1 }px`,
    }))
    this.getDistanceFromHeader = this.getDistanceFromHeader.bind(this)

    markRaw(this)
  }

  getDistanceFromHeader() {
    const header = document.getElementById('header')
    if (header) {
      const headerDistanceScrollTop = document.getElementById('header')?.getBoundingClientRect().top
      if (headerDistanceScrollTop !== undefined && this.horizontalTocRef.value) {
        const tocDistanceScrollTop = this.horizontalTocRef.value.getBoundingClientRect().top
        const distance = tocDistanceScrollTop - headerDistanceScrollTop
        this.isIntersection.value = distance < 130
      }
    }
  }
}

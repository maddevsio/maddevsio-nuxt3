import type { Ref } from 'vue'
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
  // headerHeightGlobal: number
  horizontalAnchorActiveGlobal: any
  stickyTopFromHeader: string

  constructor(props: HorizontalToCProps) {
    this.horizontalTocRef = ref(null)
    this.isIntersection = ref(false)
    this.anchors = props.items
    // this.headerHeightGlobal = inject('headerHeightGlobal').headerHeightGlobal
    this.horizontalAnchorActiveGlobal = props.activeAnchor
    this.stickyTopFromHeader = '20px'
    // this.stickyTopFromHeader = computed(() => ({
    //   '--stickyTop': `${this.headerHeightGlobal.value - 1}px`,
    // }))
    this.getDistanceFromHeader = this.getDistanceFromHeader.bind(this)

    markRaw(this)
  }

  getDistanceFromHeader() {
    // const headerDistanceScrollTop = document.getElementById('header').getBoundingClientRect().top
    const tocDistanceScrollTop = this.horizontalTocRef.value?.getBoundingClientRect().top
    this.isIntersection.value = tocDistanceScrollTop ? tocDistanceScrollTop < 130 : false
  }
}

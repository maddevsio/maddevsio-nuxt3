import type { ComputedRef, Ref } from 'vue'

export interface ToCAnchor {
  sectionId: string
  label: string
}

export interface HorizontalToCProps {
  items: []
  activeAnchor: Ref<string>
}

export interface IHorizontalToC {
  triggerBreakpoint: number
  horizontalTocRef: Ref<Element | null>
  isIntersection: Ref<boolean>
  anchors: ToCAnchor[]
  headerHeightGlobal: Ref<number>
  horizontalAnchorActiveGlobal: any
  stickyTopFromHeader: ComputedRef<{ '--stickyTop': string }>
  getDistanceFromHeader: () => void
}

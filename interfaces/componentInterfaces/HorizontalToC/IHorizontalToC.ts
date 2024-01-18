import type { Ref } from 'vue'

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
  // headerHeightGlobal: number
  horizontalAnchorActiveGlobal: any
  stickyTopFromHeader: string
  getDistanceFromHeader: () => void
}

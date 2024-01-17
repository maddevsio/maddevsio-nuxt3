import type { Ref } from 'vue'

type ToCAnchor = {
  sectionId: string
  label: string
}

export interface IHorizontalToC {
  horizontalTocRef: Ref<Element | null>
  isIntersection: boolean
  anchors: ToCAnchor[]
}

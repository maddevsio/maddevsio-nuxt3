import type { FilledLinkToWebField } from '@prismicio/types'

export interface PresentationLink {
  name: string
  link: FilledLinkToWebField
}

export interface IPresentationLinks {
  links: PresentationLink[]
}

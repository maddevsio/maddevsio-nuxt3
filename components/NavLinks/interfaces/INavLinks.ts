import type { Router } from 'vue-router'
import type { FilledLinkToWebField } from '@prismicio/types'

export interface NavLinksProps {
  primary: {
    background: string
    prevLink: FilledLinkToWebField
    prevLinkText: string
    nextLink: FilledLinkToWebField
    nextLinkText: string
    position: string
    disabledLink: string
  }
}

export interface INavLinks {
  sliceBackgroundColor: string
  prevLink: string | null
  prevLinkText: string
  nextLink: string | null
  nextLinkText: string
  position: string
  disabledLink: string
  router: Router
  colorThemeClass: string
  redirectToUrl(tagName: string, link: string): Promise<void>
}

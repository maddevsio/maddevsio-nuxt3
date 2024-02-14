import type { Router } from 'vue-router'
import type { INavLinks, NavLinksProps } from '~/components/PageBlocks/NavLinks/interfaces/INavLinks'

export class NavLinks implements INavLinks {
  sliceBackgroundColor: string
  prevLink: string | null
  prevLinkText: string
  nextLink: string | null
  nextLinkText: string
  position: string
  disabledLink: string
  router: Router
  colorThemeClass: string

  constructor(props: NavLinksProps, router: Router) {
    this.sliceBackgroundColor = props.primary?.background || 'white'
    this.prevLink = props.primary?.prevLink && props.primary?.prevLink.url ? props.primary?.prevLink.url.replace(/^https?:\/\/[^/]*/, '') : '/'
    this.prevLinkText = props.primary?.prevLinkText || 'Previous'
    this.nextLink = props.primary?.nextLink && props.primary?.nextLink.url ? props.primary?.nextLink.url.replace(/^https?:\/\/[^/]*/, '') : '/'
    this.nextLinkText = props.primary?.nextLinkText || 'Next'
    this.position = props.primary?.position || 'center'
    this.disabledLink = props.primary?.disabledLink || 'none'

    this.colorThemeClass = this.sliceBackgroundColor === 'black' ? 'nav-link-slice__link-black' : 'nav-link-slice__link-white'

    this.router = router

    this.redirectToUrl = this.redirectToUrl.bind(this)
  }

  async redirectToUrl(tagName: string, link: string) {
    if (tagName === 'a' && link) {
      await this.router.push(link)
    }
  }
}

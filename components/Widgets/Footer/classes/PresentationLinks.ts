import type { IPresentationLinks, PresentationLink } from '~/components/Widgets/Footer/interfaces/IPresentationLinks'

export class PresentationLinks implements IPresentationLinks {
  links: PresentationLink[]

  constructor(links: PresentationLink[]) {
    this.links = links
  }
}

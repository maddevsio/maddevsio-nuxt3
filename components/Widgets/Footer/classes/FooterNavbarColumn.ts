import type { IFooterNavbarColumn } from '~/components/Widgets/Footer/interfaces/IFooterNavbarColumn'
import type { IFooterNavbarSection } from '~/components/Widgets/Footer/interfaces/IFooterNavbarSection'

export class FooterNavbarColumn implements IFooterNavbarColumn {
  sections: IFooterNavbarSection[]

  constructor(sections: IFooterNavbarSection[]) {
    this.sections = sections
  }
}

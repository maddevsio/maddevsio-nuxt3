import type { IFooterNavbarSection } from '~/components/Widgets/Footer/interfaces/IFooterNavbarSection'
import type { IFooterNavbarMenu } from '~/components/Widgets/Footer/interfaces/IFooterNavbarMenu'

export class FooterNavbarSection implements IFooterNavbarSection {
  title: string
  link: string
  menus: IFooterNavbarMenu[]

  constructor(title: string, link: string, menus: IFooterNavbarMenu[]) {
    this.title = title
    this.link = link
    this.menus = menus
  }
}

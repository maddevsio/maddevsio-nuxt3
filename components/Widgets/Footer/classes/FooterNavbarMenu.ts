import type { IFooterNavbarMenu } from '~/components/Widgets/Footer/interfaces/IFooterNavbarMenu'
import type { IMenuLink } from '~/components/Widgets/shared/interfaces/IMenuLink'

export class FooterNavbarMenu implements IFooterNavbarMenu {
  subtitle: string
  links: IMenuLink[]

  constructor(subtitle: string, links: IMenuLink[]) {
    this.subtitle = subtitle
    this.links = links
  }
}

import type { IFooterNavbarMenu } from '~/components/Widgets/Footer/interfaces/IFooterNavbarMenu'

export interface IFooterNavbarSection {
  title: string
  link: string
  menus: IFooterNavbarMenu[]
}

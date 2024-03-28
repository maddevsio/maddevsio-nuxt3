import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IMenuLink } from '~/components/Widgets/shared/interfaces/IMenuLink'

export class HeaderMenuChapter implements IHeaderMenuChapter {
  title: string
  menus: IMenuLink[]

  constructor(title: string, menus: IMenuLink[]) {
    this.title = title
    this.menus = menus
  }
}

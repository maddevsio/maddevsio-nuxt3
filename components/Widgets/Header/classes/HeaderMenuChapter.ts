import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IHeaderMenuLink } from '~/components/Widgets/Header/interfaces/IHeaderMenuLink'

export class HeaderMenuChapter implements IHeaderMenuChapter {
  title: string
  menus: IHeaderMenuLink[]

  constructor(title: string, menus: IHeaderMenuLink[]) {
    this.title = title
    this.menus = menus
  }
}

import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'
import type { IHeaderMenuLink } from '~/components/Widgets/Header/interfaces/IHeaderMenuLink'
import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IHeaderMenuPost } from '~/components/Widgets/Header/interfaces/IHeaderMenuPost'
import { careersClickEvent } from '~/analytics/events'

export class HeaderMenuItem implements IHeaderMenuItem {
  mainNav: IHeaderMenuLink
  chapters: IHeaderMenuChapter[]
  post: IHeaderMenuPost

  constructor(mainNav: IHeaderMenuLink, chapters: IHeaderMenuChapter[], post: IHeaderMenuPost) {
    this.mainNav = mainNav
    this.chapters = chapters
    this.post = post

    this.sendAnalyticsEvent = this.sendAnalyticsEvent.bind(this)
  }

  sendAnalyticsEvent(event: MouseEvent | TouchEvent, location: string, prevRoute: string) {
    // @ts-ignore
    if (event.currentTarget.pathname === '/careers/') { careersClickEvent.send(location, prevRoute) }
  }
}

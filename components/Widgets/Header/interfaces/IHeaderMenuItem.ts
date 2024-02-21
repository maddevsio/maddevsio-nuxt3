import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IHeaderMenuPost } from '~/components/Widgets/Header/interfaces/IHeaderMenuPost'
import type { IHeaderMenuLink } from '~/components/Widgets/Header/interfaces/IHeaderMenuLink'

export interface IHeaderMenuItem {
  mainNav: IHeaderMenuLink
  chapters: IHeaderMenuChapter[]
  post: IHeaderMenuPost
  sendAnalyticsEvent(event: MouseEvent | TouchEvent, location: string, prevRoute: string): void
}

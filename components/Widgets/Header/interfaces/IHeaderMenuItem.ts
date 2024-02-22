import type { IHeaderMenuChapter } from '~/components/Widgets/Header/interfaces/IHeaderMenuChapter'
import type { IHeaderMenuPost } from '~/components/Widgets/Header/interfaces/IHeaderMenuPost'
import type { IMenuLink } from '~/components/Widgets/shared/interfaces/IMenuLink'

export interface IHeaderMenuItem {
  mainNav: IMenuLink
  chapters: IHeaderMenuChapter[]
  post: IHeaderMenuPost
  sendAnalyticsEvent(event: MouseEvent | TouchEvent, location: string, prevRoute: string): void
}

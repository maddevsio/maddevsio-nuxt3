import type { Ref } from 'vue'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'

export interface IHeaderMenu<T extends IHeaderMenuItem[]> {
  activeSubNavigation: Ref<string>
  activeMobileSubNavigation: Ref<string>
  activeChapter: Ref<string>
  currentRootRoute: Ref<string>
  navigationList: T
  setActiveSubMenu(navName: string): void
  setActiveMobileSubMenu(navName: string): void
  setActiveChapter(chapterName: string): void
  getMenuName(route: any): void
  setCurrentRoute(currentRoute: any): void
}

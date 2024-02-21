import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'

export class HeaderMenu implements IHeaderMenu<IHeaderMenuItem[]> {
  navigationList: IHeaderMenuItem[]

  activeSubNavigation = ref('')
  activeMobileSubNavigation = ref('')
  activeChapter = ref('')
  currentRootRoute = ref('')

  constructor(menu: IHeaderMenuItem[]) {
    this.navigationList = menu

    this.setActiveSubMenu = this.setActiveSubMenu.bind(this)
    this.setActiveMobileSubMenu = this.setActiveMobileSubMenu.bind(this)
    this.setActiveChapter = this.setActiveChapter.bind(this)
    this.setCurrentRoute = this.setCurrentRoute.bind(this)
    markRaw(this)
  }

  setActiveSubMenu(navName: string) {
    this.activeSubNavigation.value = navName
  }

  setActiveMobileSubMenu(navName: string) {
    this.activeMobileSubNavigation.value = navName
  }

  setActiveChapter(chapterName: string) {
    if (this.activeChapter.value === chapterName) {
      this.activeChapter.value = ''
    } else {
      this.activeChapter.value = chapterName
    }
  }

  getMenuName(route: any) {
    return this.navigationList
      .find(menuItem => menuItem.chapters
        .find(chapter => chapter.menus
          .find(menuLink => route.path ? route.path.includes(menuLink.url) : route.includes(menuLink.url)))) ||
      this.navigationList.find(menuItem => route.path === menuItem.mainNav.url || route === menuItem.mainNav.url) ||
      this.navigationList.find(menuItem => route.path
        ? route.path.split('/').filter(Boolean).includes(menuItem.mainNav.url.replaceAll('/', ''))
        : route.split('/').filter(Boolean).includes(menuItem.mainNav.url.replaceAll('/', '')))
  }

  setCurrentRoute(currentRoute: any) {
    try {
      this.currentRootRoute.value = this.getMenuName(currentRoute)!.mainNav.name
    } catch {
      this.currentRootRoute.value = ''
    }
  }
}

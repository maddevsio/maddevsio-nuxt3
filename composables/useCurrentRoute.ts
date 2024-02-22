import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'
import type { IFooter } from '~/components/Widgets/Footer/interfaces/IFooter'

export const useCurrentRoute = (setCurrentRoute: IHeaderMenu<IHeaderMenuItem[]>['setCurrentRoute'] | IFooter['setCurrentRoute']) => {
  const route = useRoute()

  setCurrentRoute(route.path)

  watch(() => route.path, newRoute => {
    setCurrentRoute(newRoute)
  }, { deep: true })
}

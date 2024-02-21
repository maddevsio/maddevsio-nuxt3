import type { IHeaderMenu } from '~/components/Widgets/Header/interfaces/IHeaderMenu'
import type { IHeaderMenuItem } from '~/components/Widgets/Header/interfaces/IHeaderMenuItem'

export const useCurrentRoute = (setCurrentRoute: IHeaderMenu<IHeaderMenuItem[]>['setCurrentRoute']) => {
  const route = useRoute()

  setCurrentRoute(route)

  watch(() => route.path, newRoute => {
    setCurrentRoute(newRoute)
  }, { deep: true })
}

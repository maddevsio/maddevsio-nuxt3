import type { Router } from 'vue-router'
import type { Ref } from 'vue'
import type {
  HeaderPlateContent,
  HeaderPlateData,
  IHeaderPlate,
} from '~/components/Widgets/Header/interfaces/IHeaderPlate'
import { clickHeaderCta } from '~/analytics/events'
import { smartlookClickHeaderCta } from '~/analytics/smartlookEvents'

export class HeaderPlate implements IHeaderPlate {
  route: any
  router: Router
  cookie: Ref<string | null | undefined>
  headerPlateContent: Ref<HeaderPlateContent | null | undefined>
  isSeen: Ref<string | null | undefined>
  headerPlateData: HeaderPlateData[]

  location = 'Header plate'
  constructor(route: any, router: Router, headerPlateData: HeaderPlateData[]) {
    this.route = route
    this.router = router
    this.cookie = useCookie(`seenHeaderPlate_${ route.path }`)
    this.headerPlateContent = ref(null)
    this.isSeen = ref(this.cookie.value)
    this.headerPlateData = headerPlateData

    this.closePlate = this.closePlate.bind(this)
    this.clickPlate = this.clickPlate.bind(this)
    this.filterHeaderPlateData = this.filterHeaderPlateData.bind(this)
  }

  closePlate() {
    this.headerPlateContent.value = null
    ManageCookie.setCookie({
      name: `seenHeaderPlate_${ this.route.path }`,
      value: this.route.path,
      expires: 14,
    })
  }

  filterHeaderPlateData (path: string) {
    if (!this.headerPlateData || !this.headerPlateData?.length) { return }
    const uidArr = path.split('/').filter(Boolean)
    const currentUid = path === '/' ? 'main' : uidArr[uidArr.length - 1].replaceAll('/', '')
    const newCookie = useCookie(`seenHeaderPlate_${ path }`)
    this.isSeen.value = newCookie.value
    if (this.isSeen.value) {
      this.headerPlateContent.value = null
      return
    }
    const data = this.headerPlateData.filter((item: HeaderPlateData) => item.uid === currentUid)
    this.headerPlateContent.value = data.length ? this.transformHeaderPlateData(data[0]) : null
  }

  clickPlate (path: string) {
    this.router.push(path)
    clickHeaderCta.send(this.location)
    smartlookClickHeaderCta.send({ location })
  }

  transformHeaderPlateData (data: HeaderPlateData) {
    if (!data || !Object.keys(data).length) { return }
    return {
      uid: data.uid,
      text: data.text,
      buttonText: data.button_text,
      buttonLink: data.button_link,
      backgroundColor: data.background_color,
    }
  }
}

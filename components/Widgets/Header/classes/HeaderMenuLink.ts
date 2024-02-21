import type { ImageField } from '@prismicio/client'
import NuxtLink from '#app/components/nuxt-link'
import type { IHeaderMenuLink } from '~/components/Widgets/Header/interfaces/IHeaderMenuLink'
import { careersClickEvent, contactsClickEvent } from '~/analytics/events'

export class HeaderMenuLink implements IHeaderMenuLink {
  name: string
  url: string
  showIcon?: boolean
  icon?: ImageField | undefined

  constructor(name: string, url: string, showIcon: boolean = false, icon: ImageField | undefined = undefined) {
    this.name = name
    this.url = url
    this.showIcon = showIcon
    this.icon = icon

    this.sendAnalyticsEvent = this.sendAnalyticsEvent.bind(this)
  }

  sendAnalyticsEvent(event: MouseEvent | TouchEvent, location: string, prevRoute: string) {
    // @ts-ignore
    if (event.currentTarget!.pathname === '/contact-us/') { contactsClickEvent.send(location, prevRoute) }
    // @ts-ignore
    if (event.currentTarget.pathname === '/careers/') { careersClickEvent.send(location, prevRoute) }
  }
}

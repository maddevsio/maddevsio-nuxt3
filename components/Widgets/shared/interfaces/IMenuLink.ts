import type { ImageField } from '@prismicio/client'

export interface IMenuLink {
  name: string
  url: string
  showIcon?: boolean
  icon?: ImageField | undefined
  sendAnalyticsEvent(event: MouseEvent | TouchEvent, location: string, prevRoute: string): void
}

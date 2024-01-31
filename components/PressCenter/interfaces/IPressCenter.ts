import type { ComputedRef } from 'vue'
import type { ImageField } from '@prismicio/types'
import type { ISwiperOptions } from '~/interfaces/common/commonInterfaces'

export interface PressCenterCard {
  link: {
    url: string
  }
  image: ImageField
  linkedCompanyLogo: ImageField
  date: string
  title: string
  description: string
  linkLabel: string
}

export interface PressCenterProps {
  items: PressCenterCard[]
}

export interface IPressCenter {
  swiperOptions: ISwiperOptions
  triggerBreakpoint: number
  cards: ComputedRef<PressCenterCard[]>
}
